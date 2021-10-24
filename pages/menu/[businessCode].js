import { useRouter } from "next/router";
import Head from "next/head";
import LogoLoader from "@/components/Loaders/LogoLoader";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import axios from "axios";

const Menu = dynamic(() => import("@/components/Menu"));

export default function Index() {
  const businessName = "za menu";
  const router = useRouter();
  const { businessCode } = router.query;
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/categories?businessCode=${businessCode}`)
      .then((res) => Array.isArray(res.data) && setCategories(res.data));

    axios
      .get(`/api/products?businessCode=${businessCode}`)
      .then((res) => Array.isArray(res.data) && setProducts(res.data));
  }, [businessCode]);

  return (
    <>
      <Head>
        <title>{businessName}</title>
      </Head>
      <LogoLoader />
      <Menu categories={categories} products={products} />
    </>
  );
}