import BackgroundCarousel from "@/components/background-carousel";
import EmptySection from "@/components/empty-section";
import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Home() {
  const sections = [
    {
      id: 1,
      content: (
        <>
          <BackgroundCarousel />
          <EmptySection />
        </>
      ),
    },
    {
      id: 2,
      content: (
        <>
          <BackgroundCarousel />
          <EmptySection />
        </>
      ),
    },
    {
      id: 3,
      content: (
        <>
          <BackgroundCarousel />
          <EmptySection />
        </>
      ),
    },
    {
      id: 4,
      content: (
        <>
          <BackgroundCarousel />
          <EmptySection />
        </>
      ),
    },
    {
      id: 5,
      content: (
        <>
          <BackgroundCarousel />
          <EmptySection />
        </>
      ),
    },
    {
      id: 6,
      content: (
        <>
          <BackgroundCarousel />
          <EmptySection />
        </>
      ),
    },
    {
      id: 7,
      content: (
        <>
          <BackgroundCarousel />
          <EmptySection />
        </>
      ),
    },
    {
      id: 8,
      content: (
        <>
          <BackgroundCarousel />
          <EmptySection />
        </>
      ),
    },
  ];

  const [visibleSections, setVisibleSections] = useState([sections[0]]); // First section is initially set visible

  const loadMoreSections = () => {
    setVisibleSections((prevSections) => {
      if (prevSections.length < sections.length) {
        return [...prevSections, sections[prevSections.length]];
      }
      return prevSections;
    });
  }; // Adjust the debounce delay as needed

  return (
    <>
      <InfiniteScroll
        dataLength={visibleSections.length} //This is important field to render the next data
        next={loadMoreSections}
        hasMore={visibleSections.length < sections.length}
        loader={<p>Loading......</p>}
      >
        {visibleSections.map((section) => (
          <React.Suspense key={section.id} fallback={<p>Loading......</p>}>
            {section.content}
          </React.Suspense>
        ))}
      </InfiniteScroll>
    </>
  );
}
