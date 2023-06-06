const boxContainer = document.querySelector(".boxContainer");
const saluteTextContainer = document.querySelector(".saluteTextContainer");
const saluteImgContainer = document.querySelector(".saluteImgContainer");
const authorName = document.querySelector(".name");
const jobTitleContainers = document.querySelectorAll(".jobTitleContainer");
const jobTitles = document.querySelectorAll(".jobTitle");
const projectsTitle = document.querySelector(".projectsTitle");
const phones = document.querySelectorAll(".phone");
const laptop = document.querySelector(".laptop");
const ipad = document.querySelector(".ipad");

for (let i = 0; i < 378; i++) {
  const list = [
    43, 46, 47, 48, 50, 52, 54, 56, 57, 58, 60, 61, 62, 64, 65, 67, 68, 69, 71,
    73, 76, 78, 82, 85, 88, 90, 92, 94, 96, 98, 102, 104, 106, 109, 111, 113,
    115, 118, 120, 124, 127, 130, 132, 134, 136, 138, 140, 144, 146, 148, 151,
    153, 155, 157, 160, 163, 165, 169, 172, 173, 174, 176, 178, 180, 182, 183,
    184, 186, 188, 190, 191, 193, 194, 197, 199, 202, 206, 211, 214, 216, 219,
    221, 226, 228, 230, 232, 235, 237, 239, 241, 244, 248, 253, 256, 258, 261,
    263, 268, 270, 272, 274, 277, 279, 281, 283, 286, 290, 295, 296, 298, 300,
    303, 305, 308, 309, 310, 312, 313, 314, 316, 319, 320, 321, 323, 325, 326,
    328, 329, 332,

    // 44, 47, 48, 49, 51, 53, 55, 57, 58, 59, 61, 62, 63, 65, 66, 68, 69, 70, 72,
    // 74, 77, 79, 83, 86, 89, 91, 93, 95, 97, 99, 103, 105, 107, 110, 112, 114,
    // 116, 119, 121, 125, 128, 131, 133, 135, 137, 139, 141, 145, 147, 149, 152,
    // 154, 156, 158, 161, 164, 166, 170, 173, 174, 175, 177, 179, 181, 183, 184,
    // 185, 187, 189, 191, 192, 194, 195, 198, 200, 203, 207, 212, 215, 217, 220,
    // 222, 227, 229, 231, 233, 236, 238, 240, 242, 245, 249, 254, 257, 259, 262,
    // 264, 269, 271, 273, 275, 278, 280, 282, 284, 287, 291, 296, 297, 299, 301,
    // 304, 306, 309, 310, 311, 313, 314, 315, 317, 320, 321, 322, 324, 326, 327,
    // 329, 330, 333,

    // 0, 1, 2, 3, 41, 42, 43, 44, 82, 83, 123, 124, 125, 126, 164, 165, 166, 167,
    // 205, 206, 246, 247, 287, 288, 5, 6, 46, 47, 87, 88, 128, 129, 169, 170, 210,
    // 211, 251, 252, 292, 293, 8, 9, 14, 15, 49, 50, 51, 90, 91, 92, 131, 132,
    // 133, 134, 172, 173, 213, 214, 254, 255, 295, 296, 175, 176, 217, 177, 218,
    // 259, 55, 56, 96, 97, 137, 138, 178, 179, 219, 220, 260, 261, 217, 218, 259,
    // 260, 261, 301, 302, 17, 18, 19, 58, 59, 60, 61, 99, 100, 102, 103, 140, 141,
    // 144, 181, 182, 185, 222, 223, 225, 226, 263, 264, 265, 266, 304, 305, 306,
    // 24, 25, 65, 66, 67, 106, 107, 108, 147, 148, 149, 150, 188, 189, 229, 230,
    // 270, 271, 311, 312, 67, 108, 149, 150, 191, 232, 192, 233, 274, 234, 275,
    // 316, 194, 235, 276, 154, 195, 236, 73, 114, 155, 33, 34, 74, 75, 115, 116,
    // 156, 157, 197, 198, 238, 239, 279, 280, 320, 321, 36, 37, 38, 39, 77, 78,
    // 79, 80, 118, 119, 159, 160, 161, 162, 200, 201, 202, 203, 241, 242, 282,
    // 283, 284, 285, 323, 324, 325, 326,
  ];

  const el = document.createElement("div");
  el.classList = list.includes(i) ? "box active" : "box";
  boxContainer.appendChild(el);
}

window.addEventListener("scroll", () => {
  let offsetY = window.scrollY;
  saluteTextContainer.style.transform = `translateY(${offsetY * 0.1}px)`;
  saluteImgContainer.style.transform = `translate(${offsetY * 0.4}px, ${
    offsetY * 0.7
  }px)`;
  authorName.style.transform = `translateX(${offsetY * 0.1}px)`;
  jobTitleContainers[0].style.backgroundPositionY = `${offsetY * 0.5}px`;
  jobTitleContainers[1].style.backgroundPositionY = `${-offsetY * 0.5}px`;
  jobTitles[0].style.transform = `translateX(calc(200vh - ${offsetY}px))`;
  jobTitles[1].style.transform = `translateX(calc(-300vh + ${offsetY}px))`;
  projectsTitle.style.transform = `translateY(calc(400vh - ${offsetY}px))`;
  phones[0].style.transform = `translateX(calc(500vh - ${offsetY}px))`;
  laptop.style.transform = `translateX(calc(620vh - ${offsetY}px))`;
  ipad.style.transform = `translateX(calc(740vh - ${offsetY}px))`;
});
