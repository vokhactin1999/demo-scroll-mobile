import React, { useEffect, useRef, useState } from 'react';
const data =  [
    {
      id: "temoin-1",
      idContent: "teroContent",
      class: "temoin",
      image: "./assets/img/00 TERO.png",
      title: "TERO",
      content: "Lorem ipsum dolor sit amet",
      link: "https://www.behance.net/gallery/192723993/MASCOT-3D-DESIGN-TERO",
      mainColor: "#20328d",
      itemColor: "rgb(44, 67, 186)",
      btnView: "#ffff",
      gradientMobile: "linear-gradient(to Top, rgb(32, 50, 141,1),rgb(32, 50, 141, 0))"
    },
    {
      id: "temoin-2",
      idContent: "undermeContent",
      class: "temoin",
      image: "./assets/img/01 UNDERME.png",
      title: "UNDERME",
      content: "Lorem ipsum dolor sit amet",
      link: "https://www.behance.net/gallery/184295181/Mascot-Design-UNDERME",
      mainColor: "#7b0b00",
      itemColor: "rgb(179, 15, 0)",
      btnView: "#ffff",
      gradientMobile: "linear-gradient(to Top, rgb(123, 11, 0,1),rgb(123, 11, 0,0))"
    },
    {
      id: "temoin-3",
      idContent: "mopyContent",
      class: "temoin",
      image: "./assets/img/02 MOPY.png",
      title: "MOPY",
      content: "Lorem ipsum dolor sit amet",
      link: "https://www.behance.net/gallery/184298395/Mascot-Design-MOPY",
      mainColor: "#b6d5f0",
      itemColor: "rgb(107, 170, 225)",
      btnView: "#333",
      gradientMobile: "linear-gradient(to Top, rgb(182, 213, 240,1),rgb(182, 213, 240, 0))"
    },
    {
      id: "temoin-4",
      idContent: "cupidContent",
      class: "temoin",
      title: "CUPID",
      image: "./assets/img/03 CUPID.png",
      content: "Lorem ipsum dolor sit amet",
      link: "https://www.behance.net/gallery/185625807/Mascot-Design-CUPID",
      mainColor: "#f9a22d",
      itemColor: "rgb(223, 129, 7)",
      btnView: "#ffff",
      gradientMobile: "linear-gradient(to Top, rgb(249, 162, 45,1),rgb(249, 162, 45, 0))"
    },
    {
      id: "temoin-5",
      idContent: "dreamBabyContent",
      class: "temoin",
      title: "DREAM BABY",
      image: "./assets/img/04 DREAM BABY.png",
      content: "Lorem ipsum dolor sit amet",
      link: "https://www.behance.net/gallery/189081627/MASCOT-DESIGN-DREAM-BABY",
      mainColor: "#6b9540",
      itemColor: "rgb(102, 143, 61)",
      btnView: "#ffff",
      gradientMobile: "linear-gradient(to Top, rgb(107, 149, 64,1),rgb(107, 149, 64, 0))"
    },
    {
      id: "temoin-6",
      idContent: "tibiContent",
      class: "temoin",
      title: "TIBI",
      image: "./assets/img/10 TIBI.png",
      content: "Lorem ipsum dolor sit amet",
      link: "https://www.behance.net/gallery/187498461/MASCOT-DESIGN-TIBI",
      mainColor: "#89b164",
      itemColor: "rgb(113, 153, 77)",
      btnView: "#ffff",
      gradientMobile: "linear-gradient(to Top, rgb(137, 177, 100,1),rgb(137, 177, 100, 0))"
    },
    {
      id: "temoin-7",
      idContent: "riceBabyContent",
      class: "temoin",
      title: "RICE BABY",
      image: "./assets/img/11 RICE BABY.png",
      content: "Lorem ipsum dolor sit amet",
      link: "https://www.behance.net/gallery/187349915/MASCOT-DESIGN-RICE-BABY",
      mainColor: "#c2a16a",
      itemColor: "rgb(163, 128, 67)",
      btnView: "#ffff",
      gradientMobile: "linear-gradient(to Top, rgb(194, 161, 106,1),rgb(194, 161, 106, 0))"
    },
    {
      id: "temoin-8",
      idContent: "antaContent",
      class: "temoin",
      title: "ANTA",
      image: "./assets/img/ANTA.png",
      content: "Lorem ipsum dolor sit amet",
      link: "https://www.behance.net/gallery/188005575/MASCOT-DESIGN-ANTA",
      mainColor: "#c41a21",
      itemColor: "rgb(181, 23, 29)",
      btnView: "#ffff",
      gradientMobile: "linear-gradient(to Top, rgb(196, 26, 33,1),rgb(196, 26, 33, 0))"
    },
    {
      id: "temoin-9",
      idContent: "tigerPeonyContent",
      class: "temoin",
      title: "SILVER TIGER & PEONY",
      image: "./assets/img/13 SILVER TIGER & PEONY.png",
      content: "Lorem ipsum dolor sit amet",
      link: "https://www.behance.net/gallery/190279123/MASCOT-DESIGN-SILVER-TIGER-PEONY",
      mainColor: "#04647b",
      itemColor: "rgb(5, 140, 173)",
      btnView: "#ffff",
      gradientMobile: "linear-gradient(to Top, rgb(4, 100, 123,1),rgb(4, 100, 123, 0))"
    },
    {
      id: "temoin-10",
      idContent: "ghCreationContent",
      class: "temoin",
      title: "GH CREATION",
      image: "./assets/img/17 GH CREATION.png",
      content: "Lorem ipsum dolor sit amet",
      link: "https://www.behance.net/gallery/184298395/Mascot-Design-MOPY",
      mainColor: "#004aad",
      itemColor: "rgb(0, 99, 230)",
      btnView: "#ffff",
      gradientMobile: "linear-gradient(to Top, rgb(0, 74, 173,1),rgb(0, 74, 173, 0))"
    },
    {
      id: "temoin-11",
      idContent: "pippyContent",
      class: "temoin",
      title: "PIPPY",
      image: "./assets/img/18 PIPPY.png",
      content: "Lorem ipsum dolor sit amet",
      link: "https://www.behance.net/gallery/188584797/Sticker-Pack-for-PIPPY",
      mainColor: "#f9a22d",
      itemColor: "rgb(223, 129, 7)",
      btnView: "#ffff",
      gradientMobile: "linear-gradient(to Top, rgb(249, 162, 45,1),rgb(249, 162, 45, 0))"
    }
  ]

  import { throttle } from 'lodash';
function GagoPage(props) {
    const containerRef = useRef(null);
    let container = containerRef.current;

    const [containerState, setContainerState] = useState(null)

    useEffect(() => {
        if(container)
        setContainerState(true)
    else 
    setContainerState(false)
    },[])

    useEffect(() => {
        if(containerState) return () => {};
            let isInitItem = null;
            let isScrolling = false;
    
    
            if (!container) {
              console.error('Không tìm thấy vùng chứa "scrollingDiv".');
              return;
            }
    
            let items = Array.from(container.children);
            console.log(items);
            if (items.length === 0) {
              console.error('Không tìm thấy phần tử con nào trong "scrollingDiv".');
              return;
            }
            const itemHeight = items[0].offsetHeight;
            console.log(itemHeight);
    
            // var windowWidth = $(window).width();
    
            // if (windowWidth > 992) {
            //   // Handle desktop
            // } else if (windowWidth < 479) {
            //   // Handle mobile
            // }

            items.forEach((item, index) => {
              const clone = item.cloneNode(true);
              clone.setAttribute(
                "data-temoin",
                item.getAttribute("data-temoin")
              );
              // Di chuyển phần tử đã sao chép vào vị trí đúng bắt đầu từ phần tử thứ 0
              container.appendChild(clone);
              // Nếu đây là phần tử cuối cùng trong mảng items
              if (index === items.length - 1) {
                // Di chuyển phần tử đã sao chép đầu tiên vào vị trí đầu tiên
                container.insertBefore(clone, container.firstChild);
              }
            });
    
            // Handle desktop
            items = Array.from(container.children);
    
            const isMobile = window.matchMedia('only screen and (max-width: 760px)').matches;
    
            let currentCenterItemId = null;
    
            const updateCenterItem = () => {
              // Update center item logic
              const centerY = isMobile
              ? window.innerHeight * 0.8
              : window.innerHeight / 2;
            let closestItem = null;
            let minDistance = Infinity;


              isInitItem = true;
              items.forEach((item) => {
                const itemRect = item.getBoundingClientRect();
                const itemCenterY = (itemRect.top + itemRect.bottom) / 2;
                const distance = Math.abs(centerY - itemCenterY);

                if (distance < minDistance) {
                  minDistance = distance;
                  closestItem = item;
                }
              });
            // Kiểm tra xem có tìm thấy phần tử cốt lõi mới không
            const newCenterItemId = closestItem
              ? closestItem.getAttribute("data-temoin")
              : 1;

            if (newCenterItemId !== currentCenterItemId) {
              currentCenterItemId = newCenterItemId;

              items.forEach((item) => {
                item.style.opacity = item === closestItem ? 1 : 0.4;
                item.style.pointerEvents =
                  item === closestItem ? "auto" : "none";
              });
            }
            };
    
            const moveItemIfNeeded = () => {
              // Move item if needed logic
              const scrollTop = container.scrollTop;
              const scrollHeight = container.scrollHeight;
              const clientHeight = container.clientHeight;
            //   if (windowWidth >= 992) {
                if (scrollTop < itemHeight * 2.5 + 30) {
                  const lastItem =
                    container.children[container.children.length - 1];
                    console.log(lastItem)
                  container.insertBefore(lastItem, container.firstChild);
  
                  // Tính toán lại giá trị scrollTop để đảm bảo cuộn lên không bị đứng
                  container.scrollTop += lastItem.offsetHeight; // Sử dụng offsetHeight của phần tử cuối cùng
                } else if (
                  scrollTop + clientHeight >=
                  scrollHeight - (itemHeight + 25)
                ) {
                  const firstItem = container.children[0];
                  container.appendChild(firstItem);
                  container.scrollTop += itemHeight; // Thay đổi dấu +
                }
            //   } 
            //   else {
            //     if (scrollTop < itemHeight * 2) {
            //       const lastItem =
            //         container.children[container.children.length - 1];
            //       container.insertBefore(lastItem, container.firstChild);
            //       container.scrollTop += itemHeight;
            //     } else if (
            //       scrollTop + clientHeight >=
            //       scrollHeight - itemHeight * 2
            //     ) {
            //       const firstItem = container.children[0];
            //       container.appendChild(firstItem);
            //       container.scrollTop -= itemHeight;
            //     }
            //   }
            };
            const throttledUpdate = throttle(updateCenterItem, 300);

    
            container.addEventListener('scroll', () => {
              if (!isScrolling) {
                isScrolling = true;
                moveItemIfNeeded();
                throttledUpdate();
                setTimeout(() => {
                  isScrolling = false;
                }, 10);
              }
            });
    
            const mouseWheelHandler = (e) => {
              // Mouse wheel handler logic
              e.preventDefault();
              let  linesToScroll =
                  e.deltaY >= 0 ? 33.33333129882813 : -33.33333129882813;
                console.log(linesToScroll, "linesToScroll");
            //   } else {
            //     linesToScroll = e.deltaY;
            //   }
  
              const scrollAmount = linesToScroll;
  
              // Chức năng di chuyển phần tử nếu cần thiết
  
              container.scrollTop += scrollAmount;
            };
    
            container.addEventListener('wheel', mouseWheelHandler);
        const initialAutoScroll = () => {
            const scrollOffset = 150;
            let container = containerRef.current;
            if(!container) return null;
            // Điều chỉnh các giá trị này
            container.scrollBy({
              top: scrollOffset,
              behavior: "smooth",
            });
          };
          initialAutoScroll()
        // Cleanup function if necessary
        return () => {
          // Cleanup logic
          container.removeEventListener('wheel', mouseWheelHandler);
          container.removeEventListener('scroll', () => {
            if (!isScrolling) {
              isScrolling = true;
              moveItemIfNeeded();
              throttledUpdate();
              setTimeout(() => {
                isScrolling = false;
              }, 10);
            }
          });
        };
      }, [containerState]);
    return (
        <div className="cover-body">
        <div>
          <div className="side droite">
            <div id="scrollingDiv" className="scrollingdiv" ref={containerRef}>
              <div data-temoin={1} className="item">
                <h2 className="heading-2">
                  <p className="link">TERO</p>
                </h2>
              </div>
              <div data-temoin={2} className="item">
                <h2 className="heading-2">
                  <p className="link">UNDERME</p>
                </h2>
              </div>
              <div data-temoin={3} className="item">
                <h2 className="heading-2">
                  <p data-temoin={3} className="link">
                    MOPY
                  </p>
                </h2>
              </div>
              <div data-temoin={4} className="item">
                <h2 className="heading-2">
                  <p className="link">CUPID</p>
                </h2>
              </div>
              <div data-temoin={5} className="item">
                <h2 className="heading-2">
                  <p className="link">DREAM BABY</p>
                </h2>
              </div>
              <div data-temoin={6} className="item">
                <h2 className="heading-2">
                  <p className="link">TIBI</p>
                </h2>
              </div>
              <div data-temoin={7} className="item">
                <h2 className="heading-2">
                  <p className="link">RICE BABY</p>
                </h2>
              </div>
              <div data-temoin={8} className="item">
                <h2 className="heading-2">
                  <p className="link">ANTA</p>
                </h2>
              </div>
              <div data-temoin={9} className="item">
                <h2 className="heading-2">
                  <p className="link">SILVER TIGER &amp; PEONY</p>
                </h2>
              </div>
              <div data-temoin={10} className="item">
                <h2 className="heading-2">
                  <p className="link">GH CREATION</p>
                </h2>
              </div>
              <div data-temoin={11} className="item">
                <h2 className="heading-2">
                  <p className="link">PIPPY</p>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    );
}

export default GagoPage;