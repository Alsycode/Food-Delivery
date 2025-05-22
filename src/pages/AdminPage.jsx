import React, { useState, useEffect } from 'react';

function AdminPage() {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    category: '',
    image: '',
    tags: '',
    description: '',
    bestseller: false,
    chefsChoice: false,
  });
  const [editingProduct, setEditingProduct] = useState(null);

  // Fetch products and users on mount
  useEffect(() => {
    fetch('http://localhost:3001/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => alert('Failed to load products: ' + err.message));

    fetch('http://localhost:3001/users?role_ne=admin')
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => alert('Failed to load users: ' + err.message));
  }, []);

  // Handle image file selection
  const handleImageChange = (e, isEditing) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validate file type and size
    if (!file.type.startsWith('image/')) {
      alert('Please select an image file.');
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      alert('Image size must be less than 5MB.');
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result;
      if (isEditing) {
        setEditingProduct({ ...editingProduct, image: base64String });
      } else {
        setNewProduct({ ...newProduct, image: base64String });
      }
    };
    reader.onerror = () => alert('Failed to read image file.');
    reader.readAsDataURL(file);
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    if (!newProduct.name || !newProduct.price || !newProduct.category || !newProduct.image || !newProduct.tags || !newProduct.description) {
      alert('Please fill in all required fields, including an image.');
      return;
    }
    if (isNaN(newProduct.price) || newProduct.price <= 0) {
      alert('Price must be a valid number greater than 0.');
      return;
    }

    try {
      const product = {
        id: String(products.length + 1),
        ...newProduct,
        price: parseFloat(newProduct.price),
        tags: newProduct.tags.split(',').map(tag => tag.trim()),
        bestseller: !!newProduct.bestseller,
        chefsChoice: !!newProduct.chefsChoice,
      };

      const response = await fetch('http://localhost:3001/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product),
      });

      if (!response.ok) {
        throw new Error('Failed to add product.');
      }

      const addedProduct = await response.json();
      setProducts([...products, addedProduct]);
      setNewProduct({
        name: '',
        price: '',
        category: '',
        image: '',
        tags: '',
        description: '',
        bestseller: false,
        chefsChoice: false,
      });
      alert('Product added successfully!');
    } catch (error) {
      alert('Failed to add product: ' + error.message);
    }
  };

  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    if (!editingProduct.name || !editingProduct.price || !editingProduct.category || !editingProduct.image || !editingProduct.tags || !editingProduct.description) {
      alert('Please fill in all required fields, including an image.');
      return;
    }
    if (isNaN(editingProduct.price) || editingProduct.price <= 0) {
      alert('Price must be a valid number greater than 0.');
      return;
    }

    try {
      const updatedProduct = {
        ...editingProduct,
        price: parseFloat(editingProduct.price),
        tags: editingProduct.tags.split(',').map(tag => tag.trim()),
        bestseller: !!editingProduct.bestseller,
        chefsChoice: !!editingProduct.chefsChoice,
      };

      const response = await fetch(`http://localhost:3001/products/${editingProduct.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedProduct),
      });

      if (!response.ok) {
        throw new Error('Failed to update product.');
      }

      const updatedProductData = await response.json();
      setProducts(products.map(product => (product.id === editingProduct.id ? updatedProductData : product)));
      setEditingProduct(null);
      alert('Product updated successfully!');
    } catch (error) {
      alert('Failed to update product: ' + error.message);
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/products/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete product.');
      }

      setProducts(products.filter(product => product.id !== id));
      alert('Product deleted successfully!');
    } catch (error) {
      alert('Failed to delete product: ' + error.message);
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/users/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete user.');
      }

      setUsers(users.filter(user => user.id !== id));
      alert('User deleted successfully!');
    } catch (error) {
      alert('Failed to delete user: ' + error.message);
    }
  };

  return (
    <div className="p-4 flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>

      {/* Add/Edit Product Form */}
      <div className="mb-8 sm:w-full lg:w-[70%]">
        <h3 className="text-xl font-semibold mb-2">{editingProduct ? 'Edit Product' : 'Add New Product'}</h3>
        <div className="card bg-base-100 dark:bg-gray-700 shadow-xl">
          <div className="card-body">
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                value={editingProduct ? editingProduct.name : newProduct.name}
                onChange={(e) =>
                  editingProduct
                    ? setEditingProduct({ ...editingProduct, name: e.target.value })
                    : setNewProduct({ ...newProduct, name: e.target.value })
                }
                className="input input-bordered w-full"
                placeholder="Enter product name"
              />
            </div>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                step="0.01"
                value={editingProduct ? editingProduct.price : newProduct.price}
                onChange={(e) =>
                  editingProduct
                    ? setEditingProduct({ ...editingProduct, price: e.target.value })
                    : setNewProduct({ ...newProduct, price: e.target.value })
                }
                className="input input-bordered w-full"
                placeholder="Enter price"
              />
            </div>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <input
                type="text"
                value={editingProduct ? editingProduct.category : newProduct.category}
                onChange={(e) =>
                  editingProduct
                    ? setEditingProduct({ ...editingProduct, category: e.target.value })
                    : setNewProduct({ ...newProduct, category: e.target.value })
                }
                className="input input-bordered w-full"
                placeholder="Enter category"
              />
            </div>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageChange(e, !!editingProduct)}
                className="file-input file-input-bordered w-full"
              />
              {(editingProduct?.image || newProduct.image) && (
                <div className="mt-2">
                  <img
                    src={editingProduct ? editingProduct.image : newProduct.image}
                    alt="Preview"
                    className="w-32 h-32 object-cover rounded"
                  />
                </div>
              )}
            </div>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Tags (comma-separated)</span>
              </label>
              <input
                type="text"
                value={editingProduct ? editingProduct.tags : newProduct.tags}
                onChange={(e) =>
                  editingProduct
                    ? setEditingProduct({ ...editingProduct, tags: e.target.value })
                    : setNewProduct({ ...newProduct, tags: e.target.value })
                }
                className="input input-bordered w-full"
                placeholder="e.g., tomato, cheese, basil"
              />
            </div>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                value={editingProduct ? editingProduct.description : newProduct.description}
                onChange={(e) =>
                  editingProduct
                    ? setEditingProduct({ ...editingProduct, description: e.target.value })
                    : setNewProduct({ ...newProduct, description: e.target.value })
                }
                className="textarea textarea-bordered w-full"
                placeholder="Enter product description"
              />
            </div>
            <div className="form-control mb-4">
              <label className="label cursor-pointer">
                <span className="label-text">Bestseller</span>
                <input
                  type="checkbox"
                  checked={editingProduct ? editingProduct.bestseller : newProduct.bestseller}
                  onChange={(e) =>
                    editingProduct
                      ? setEditingProduct({ ...editingProduct, bestseller: e.target.checked })
                      : setNewProduct({ ...newProduct, bestseller: e.target.checked })
                  }
                  className="checkbox"
                />
              </label>
            </div>
            <div className="form-control mb-4">
              <label className="label cursor-pointer">
                <span className="label-text">Chef's Choice</span>
                <input
                  type="checkbox"
                  checked={editingProduct ? editingProduct.chefsChoice : newProduct.chefsChoice}
                  onChange={(e) =>
                    editingProduct
                      ? setEditingProduct({ ...editingProduct, chefsChoice: e.target.checked })
                      : setNewProduct({ ...newProduct, chefsChoice: e.target.checked })
                  }
                  className="checkbox"
                />
              </label>
            </div>
            <button
              onClick={editingProduct ? handleUpdateProduct : handleAddProduct}
              className="btn btn-primary w-full"
            >
              {editingProduct ? 'Update Product' : 'Add Product'}
            </button>
            {editingProduct && (
              <button
                onClick={() => setEditingProduct(null)}
                className="btn btn-outline btn-sm mt-2 w-full"
              >
                Cancel
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Product List */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Manage Products</h3>
        <div className="card bg-base-100 dark:bg-gray-700 shadow-xl">
          <div className="card-body">
            {products.length === 0 ? (
              <p className="text-base-content/70">No products available.</p>
            ) : (
              <div className="space-y-4">
                {products.map(product => (
                  <div
                    key={product.id}
                    className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-2 border-b border-base-200 dark:border-gray-600"
                  >
                    <div className="flex items-start space-x-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div>
                        <h4 className="font-semibold">{product.name}</h4>
                        <p className="text-base-content/70">
                          Rs. {product.price.toFixed(2)} | {product.category}
                        </p>
                        <p className="text-base-content/70">Tags: {product.tags.join(', ')}</p>
                        <p className="text-base-content/70">{product.description}</p>
                        <p className="text-base-content/70">
                          {product.bestseller && <span className="badge badge-success mr-2">Bestseller</span>}
                          {product.chefsChoice && <span className="badge badge-info">Chef's Choice</span>}
                        </p>
                      </div>
                    </div>
                    <div className="flex space-x-2 mt-2 sm:mt-0">
                      <button
                        onClick={() => setEditingProduct({ ...product, tags: product.tags.join(', ') })}
                        className="btn btn-warning btn-sm"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteProduct(product.id)}
                        className="btn btn-error btn-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* User List */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Manage Users</h3>
        <div className="card bg-base-100 dark:bg-gray-700 shadow-xl">
          <div className="card-body">
            {users.length === 0 ? (
              <p className="text-base-content/70">No users available.</p>
            ) : (
              <div className="space-y-4">
                {users.map(user => (
                  <div
                    key={user.id}
                    className="flex justify-between items-center p-2 border-b border-base-200 dark:border-gray-600 gap-4"
                  >
                    <div>
                      <h4 className="font-semibold">{user.name}</h4>
                      <p className="text-base-content/70">{user.email}</p>
                    </div>
                    <button
                      onClick={() => handleDeleteUser(user.id)}
                      className="btn btn-error btn-sm"
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;