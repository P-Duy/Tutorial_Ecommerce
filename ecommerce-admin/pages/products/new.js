import Layout from "@/components/Layout";

export default function NewProduct(){
    return (
        <Layout>
            <h1>New product</h1>
            <label>Product name</label>
            <input type="text" placeholder="Product name ..."></input>
            <label>Description</label>
            <input type="text" placeholder="Description ..."></input>
            <label>Price(USD)</label>
            <input type="number" placeholder="Price ..."></input>
            <button className="btn-primary" >Save</button>
        </Layout>
    )
}