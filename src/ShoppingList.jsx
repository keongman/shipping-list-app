import React, { useState } from 'react';

const ShoppingList = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addItem = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, { id: Date.now(), text: inputValue, checked: false }]);
      setInputValue('');
    }
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const toggleItem = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '480px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
        쇼핑 리스트
      </h1>

      <div style={{ display: 'flex', gap: '8px', marginBottom: '1rem' }}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addItem()}
          style={{ border: '1px solid #ccc', borderRadius: '4px', padding: '4px 8px', flex: 1 }}
          placeholder="새 아이템 입력..."
        />
        <button
          onClick={addItem}
          style={{ background: '#3b82f6', color: 'white', padding: '4px 16px', borderRadius: '4px', border: 'none', cursor: 'pointer' }}
        >
          추가
        </button>
      </div>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {items.map((item) => (
          <li key={item.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => toggleItem(item.id)}
                style={{ marginRight: '8px' }}
              />
              <span style={{ textDecoration: item.checked ? 'line-through' : 'none', color: item.checked ? '#9ca3af' : 'inherit' }}>
                {item.text}
              </span>
            </div>
            <button
              onClick={() => removeItem(item.id)}
              style={{ color: '#ef4444', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.25rem' }}
            >
              ×
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
