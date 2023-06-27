import { createContext, useState } from "react";
import {
  CommentData,
  CommentsData,
  tCommentResponseMultiple,
} from "../schemas/commentsShema";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { iError } from "./UserContext";

interface CommentsProviderProps {
  children: React.ReactNode;
}

interface CommentsProviderValue {
  newCommentsSubmit: (data: CommentsData) => Promise<void>;
  setGetId: React.Dispatch<React.SetStateAction<number | null>>;
  setButton: React.Dispatch<React.SetStateAction<boolean>>;
  button: boolean;
  getComments: (id: string) => Promise<void>;
  currentComments: {
    content: string;
    id: number;
    title: string;
    createdAt: string;
    user: {
      id: number;
      name: string;
      email: string;
      color: string;
    };
    advert: {
      id: number;
    };
  }[];
}

export const CommentsContext = createContext({} as CommentsProviderValue);

export const CommentsProvider = ({ children }: CommentsProviderProps) => {
  const [getId, setGetId] = useState<null | number>(null);
  const [button, setButton] = useState(false);
  const [currentComments, setCurrentComments] = useState<CommentData[]>([]);

  const newCommentsSubmit = async (data: CommentsData) => {
    try {
      const newObjComments = {
        ...data,
        title: "teste",
      };
      await api.post<CommentsData>(`comments/${getId}`, newObjComments);
      toast.success("Comentário criado com sucesso");
    } catch (error) {
      const currentError = error as AxiosError<iError>;
      console.error(currentError.message);
      toast.error(currentError.response?.data.message);
    }
  };

  const getComments = async (id: string) => {
    try {
      const { data } = await api.get<tCommentResponseMultiple>("/comments");

      const comment = data.filter(
        (elt: CommentData) => elt.advert.id === Number(id)
      );

      setCurrentComments(comment);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <CommentsContext.Provider
      value={{
        newCommentsSubmit,
        setGetId,
        button,
        setButton,
        getComments,
        currentComments,
      }}
    >
      {children}
    </CommentsContext.Provider>
  );
};
