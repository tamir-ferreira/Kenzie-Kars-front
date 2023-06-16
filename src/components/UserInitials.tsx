interface UserProps {
  name: string;
  bigSize?: boolean;
}

export const UserInitials = ({
  name = "placeholder",
  bigSize = false,
}: UserProps) => {
  let color = "";

  const splitName = name.split(" ");

  const firstLetterFirstName = splitName[0].charAt(0);
  const firstLetterLastName = splitName[splitName.length - 1].charAt(0);
  const initials = firstLetterFirstName + firstLetterLastName;

  const userColor = localStorage.getItem("@user-color");

  if (userColor) {
    color = userColor;
  } else {
    const minNumber = 800000;
    const randomNumber = Math.floor(
      Math.random() * (16777215 - minNumber * 3) + minNumber
    );
    color = "#" + randomNumber.toString(16);
    localStorage.setItem("@user-color", color);
  }

  return (
    <div
      style={{ backgroundColor: color }}
      className={`flex items-center justify-center rounded-full text-white-fixed ${
        bigSize ? "w-20 h-20 sm:w-30 sm:h-30" : "w-8 h-8 "
      }`}>
      <span className={`${bigSize && "text-heading-2-500"}`}>{initials}</span>
    </div>
  );
};
