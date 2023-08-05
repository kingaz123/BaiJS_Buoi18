function showContent(sectionId) {
  // Ẩn tất cả các nội dung
  const contentSections = document.querySelectorAll(".content-section");
  contentSections.forEach((section) => {
    section.style.display = "none";
  });

  // Hiển thị nội dung tương ứng với sectionId
  const selectedContent = document.getElementById(sectionId);
  if (selectedContent) {
    selectedContent.style.display = "block";
  }

  // Gán thuộc tính active cho menu-item đã chọn
  const menuItems = document.querySelectorAll(".menu-item");
  menuItems.forEach((item) => {
    item.classList.remove("active");
  });

  const selectedMenuItem = document.querySelector(
    `[onclick="showContent('${sectionId}')"]`
  );
  if (selectedMenuItem) {
    selectedMenuItem.classList.add("active");
  }
}
