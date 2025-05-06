async function useBannerData(fetchURL) {
      const res = await fetch(fetchURL);
      const data = await res.json();
      return data?.results?.slice(0, 8) || [];
}

export default useBannerData;