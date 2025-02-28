import Box from "@mui/material/Box";
import { toast } from "react-toastify";
import Modal from "@mui/material/Modal";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

function ConfirmAlert({ ticket }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate();

  const handleDone = () => {
    toast.success("Your ticket has been booked");
    navigate("/");
    handleClose();
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  return (
    <div>
      <div className="grid">
        {ticket?.totalSeats === 0 ? (
          <button className="bg-custum_blue2 cursor-not-allowed text-white  py-2 rounded-xl text-lg font-bold">
            Select Seats
          </button>
        ) : (
          <button
            className="bg-custum_blue cursor-pointer text-white  py-2 rounded-xl text-lg font-bold"
            onClick={handleOpen}
          >
            Book Now
          </button>
        )}
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <p className="text-2xl font-semibold text-green-600">
              Booking Confirmed
            </p>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className="flex justify-between ">
              <div className="flex flex-col justify-center">
                <p className="text-lg font-semibold">Officer Duty</p>
                <div className="text-xs flex gap-4 text-gray-500">
                  <p className="border px-2 rounded-lg">U/A</p>
                  <p className="border px-2 rounded-lg">Malayalam</p>
                </div>
                <p>Kairali sree kozhikode</p>
              </div>
              <div>
                <img
                  className="w-20"
                  src="https://assetscdn1.paytm.com/images/cinema/_Officer-on-duty--600X800-d5fccfb0-cc2b-11ef-a259-4b3c6d26f4a9.jpg?format=webp&imwidth=576"
                  alt=""
                />
              </div>
            </div>
            <hr className="my-2" />
            <div className="flex gap-8">
              <div>
                <p className="text-sm text-gray-700">Date</p>
                <p className="text-sm font-semibold">16/2/15</p>
              </div>
              <div>
                <p className="text-sm text-gray-700">Time</p>
                <p className="text-sm font-semibold">06.00pm</p>
              </div>
              <div>
                <p className="text-sm text-gray-700">screen</p>
                <p className="text-sm font-semibold">SCREEN-1</p>
              </div>
              <div>
                <p className="text-sm text-gray-700">BOOKING ID</p>
                <p className="text-sm font-semibold">0024350</p>
              </div>
            </div>
            <p className="text-sm text-gray-700 mt-2">Seats</p>

            {ticket?.gold?.seatId?.map((item) => (
              <span className="mr-2 text-sm font-semibold">{item}</span>
            ))}
            {ticket?.platinum?.seatId?.map((item) => (
              <span className="mr-2 text-sm font-semibold">{item}</span>
            ))}
            {ticket?.silver?.seatId?.map((item) => (
              <span className="mr-2 text-sm font-semibold">{item}</span>
            ))}
            <br />
            <div className="flex justify-end">
              <button
                onClick={() => handleDone()}
                className="bg-blue-600 px-8 py-2 rounded-lg text-white"
              >
                done
              </button>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default ConfirmAlert;
