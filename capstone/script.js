gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

document.fonts.ready.then(() => {
    gsap.set(".split", { opacity: 1 });
  
    let split;
    SplitText.create(".split", {
      type: "words,lines",
      linesClass: "line",
      autoSplit: true,
      mask: "lines",
      onSplit: (self) => {
        split = gsap.from(self.lines, {
          duration: 3,
          yPercent: 100,
          opacity: 0,
          stagger: 0.1,
          ease: "expo.out",
        });
        return split;
      }
    });
  })


      gsap.from(".underline.long", {
      scrollTrigger: {
        trigger: ".horizontal-container",
        start: "top top",
        end: "+=3000", // depends on your horizontal scroll length
        scrub: true,
      },
      scaleX: 0,
      transformOrigin: "left center",
      ease: "none"
    }); 
  
  



  let sections = gsap.utils.toArray(".panel");

  gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".horizontal-container",
      pin: true,
      scrub: 1,
      snap: 1 / (sections.length - 1),
      // base vertical scrolling on how wide the container is so it feels more natural.
      end: "+=3500",
    }
  });
  
  

