interface UserProps {
  name: string;
}

export const UserInitials = ({ name }: UserProps) => {
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
    const randomNumber = Math.floor(Math.random() * (16777215 - minNumber * 3) + minNumber);
    color = "#" + randomNumber.toString(16);
    localStorage.setItem("@user-color", color);
  }

  return (
    <div
      style={{ backgroundColor: color }}
      className={`w-8 h-8 flex items-center justify-center rounded-full text-white-fixed`}
    >
      <span>{initials}</span>
    </div>
  );
};
