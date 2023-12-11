import { useCountStore } from "@/hooks/useCountStore";
import { ISet } from "@/interfaces/Pokemon";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FormEvent, FunctionComponent, useState } from "react";
import CustomModalComponent from "./CustomModalComponent";

const PokemonInfoComponent: FunctionComponent<{
  info: ISet;
  updateName: any;
}> = ({ info, updateName }) => {
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ename, setEname] = useState("");
  const { inc, pushId } = useCountStore();

  const openFormModal = () => {
    setIsFormModalOpen(true);
  };

  const closeFormModal = () => {
    setIsFormModalOpen(false);
  };
  const handleenameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEname(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setEname("");
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="mt-4">
      <div className="p-4">
        <h1 className="text-xl font-bold text-purple-800">
          {info.name}
          <FontAwesomeIcon
            onClick={openFormModal}
            icon={faEdit}
            className="text-red-600 fa-xl ml-4"
          />
        </h1>
        <div className="mt-2">
          <div className="flex items-center text-gray-700 dark:text-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 text-purple-800"
            >
              <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
              <line x1="16" x2="16" y1="2" y2="6"></line>
              <line x1="8" x2="8" y1="2" y2="6"></line>
              <line x1="3" x2="21" y1="10" y2="10"></line>
            </svg>
            <span className="mx-2">Release date: {info.releaseDate}</span>
          </div>
          <div className="flex items-center mt-2 text-gray-700 dark:text-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 text-purple-800"
            >
              <polyline points="4 7 4 4 20 4 20 7"></polyline>
              <line x1="9" x2="15" y1="20" y2="20"></line>
              <line x1="12" x2="12" y1="4" y2="20"></line>
            </svg>
            <span className="mx-2">Total: {info.total}</span>
          </div>
        </div>
        <div className="mt-4">
          <button
            onClick={openModal}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline h-10 px-4 py-2 text-purple-800 font-bold"
          >
            Quick View
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <CustomModalComponent
          info={info}
          isOpen={isModalOpen}
          onClose={closeModal}
        >
          <div
            className="text-card-foreground w-full max-w-sm mx-auto rounded-md overflow-hidden p-4"
            data-v0-t="card"
          >
            <div className="flex justify-center  bg-gray-200 w-64 p-4">
              <img
                className="w-32 h-32 p-2"
                src={info.images.logo}
                alt="card image"
              />
            </div>
            <div className="p-4">
              <h1 className="text-xl font-bold text-purple-800">{info.name}</h1>
              <div className="mt-2">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 text-purple-800"
                  >
                    <rect
                      width="18"
                      height="18"
                      x="3"
                      y="4"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="16" x2="16" y1="2" y2="6"></line>
                    <line x1="8" x2="8" y1="2" y2="6"></line>
                    <line x1="3" x2="21" y1="10" y2="10"></line>
                  </svg>
                  <span className="mx-2">Release date: {info.releaseDate}</span>
                </div>
                <div className="flex items-center mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 text-purple-800"
                  >
                    <polyline points="4 7 4 4 20 4 20 7"></polyline>
                    <line x1="9" x2="15" y1="20" y2="20"></line>
                    <line x1="12" x2="12" y1="4" y2="20"></line>
                  </svg>
                  <span className="mx-2">Total: 350</span>
                </div>
                <div className="flex items-center mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 text-purple-800"
                  >
                    <circle cx="16" cy="4" r="1"></circle>
                    <path d="m18 19 1-7-6 1"></path>
                    <path d="m5 8 3-3 5.5 3-2.36 3.5"></path>
                    <path d="M4.24 14.5a5 5 0 0 0 6.88 6"></path>
                    <path d="M13.76 17.5a5 5 0 0 0-6.88-6"></path>
                  </svg>
                  <span className="mx-2">
                    Legalities: {info.legalities.expanded}
                  </span>
                </div>
                <div className="flex items-center mt-2 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 text-purple-800"
                  >
                    <line x1="8" x2="21" y1="6" y2="6"></line>
                    <line x1="8" x2="21" y1="12" y2="12"></line>
                    <line x1="8" x2="21" y1="18" y2="18"></line>
                    <line x1="3" x2="3.01" y1="6" y2="6"></line>
                    <line x1="3" x2="3.01" y1="12" y2="12"></line>
                    <line x1="3" x2="3.01" y1="18" y2="18"></line>
                  </svg>
                  <span className="mx-2">Series: {info.series}</span>
                </div>
              </div>
              <div className="mt-4">
                <button
                  onClick={() => {
                    inc();
                    pushId(info.id);
                  }}
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 text-purple-800"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </CustomModalComponent>
      </div>
      <div className="flex justify-center items-center">
        <CustomModalComponent
          info={info}
          isOpen={isFormModalOpen}
          onClose={closeFormModal}
        >
          <div className="rounded-lg text-card-foreground" data-v0-t="card">
            <div className="p-6">
              <form className="grid gap-4" onSubmit={handleSubmit}>
                <div className="flex flex-col space-y-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="ename"
                    value={ename}
                    onChange={handleenameChange}
                    required
                  />
                </div>
                <div className="flex">
                  <input
                    type="submit"
                    placeholder="Update Name"
                    onClick={() =>
                      updateName({ setid: info.id!, setName: ename })
                    }
                    className="rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 text-purple-800 border"
                  />
                </div>
              </form>
            </div>
          </div>
        </CustomModalComponent>
      </div>
    </div>
  );
};

export default PokemonInfoComponent;
