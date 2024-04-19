const listItems = [
  {
    name: "IMG_10234.png",
    icon: "ri-image-fill",
    size: "2.7",
    iconStyle: "text-[#1976d2]",
  },
  {
    name: "My Report.docx",
    icon: "ri-file-3-line",
    size: "5.4",
    iconStyle: "text-[#1d92f1] bg-[#ddeffd]",
  },
  {
    name: "Javascript Crash Course.mp4",
    icon: "ri-music-2-fill",
    size: "13.9",
    iconStyle: "text-[#ffd12c] bg-[#fff8df]",
  },
  {
    name: " Billie Eilish.mp3",
    icon: "ri-video-on-fill",
    size: "4.4",
    iconStyle: "text-[#3bc963] bg-[#e2f7e8]",
  },
];
const listItemsNew = listItems.map((item) => {
  return {
    ...item,
    extension: item.name.split(".").pop().toUpperCase() + " File",
  };
});

export { listItemsNew };
