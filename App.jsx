import React, { useState } from "react";
import "./App.css";

const resorts = [
  {
    name: "InterContinental Đà Nẵng",
    location: "Đà Nẵng, Việt Nam",
    price: "4.200.000đ",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Vinpearl Resort Phú Quốc",
    location: "Phú Quốc, Kiên Giang",
    price: "3.500.000đ",
    rating: "4.7",
    image:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Fusion Resort Cam Ranh",
    location: "Khánh Hòa, Việt Nam",
    price: "3.800.000đ",
    rating: "4.6",
    image:
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "The Ocean Resort",
    location: "Vũng Tàu, Việt Nam",
    price: "2.900.000đ",
    rating: "4.5",
    image:
      "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=800&q=80",
  },
];

function App() {
  const [showAI, setShowAI] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Xin chào 👋 Tôi là AI Assistant. Tôi có thể giúp bạn tìm resort phù hợp với nhu cầu và ngân sách.",
    },
  ]);

  const sendMessage = () => {
    if (!message.trim()) return;

    setMessages([
      ...messages,
      {
        type: "user",
        text: message,
      },
      {
        type: "bot",
        text: "Dựa trên yêu cầu của bạn, tôi đề xuất InterContinental Đà Nẵng và Fusion Resort Cam Ranh. Bạn có muốn xem chi tiết không?",
      },
    ]);

    setMessage("");
  };

  return (
    <div className="app">
      {/* ================= NAVBAR ================= */}
      <header className="navbar">
        <div className="logo">
          <div className="logo-icon">🌴</div>
          <div>
            <b>ResortBooking</b>
            <span>AI</span>
          </div>
        </div>

        <nav>
          <a href="#home">Home</a>
          <a href="#resorts">Resorts</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="nav-right">
          <button className="icon-btn">⌕</button>
          <button className="icon-btn">♡</button>

          <div className="user">
            <div className="avatar">H</div>
            <span>Hoang</span>
            <span>⌄</span>
          </div>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="small-title">WELCOME TO RESORT BOOKING SYSTEM</p>

          <h1>
            Kỳ nghỉ trong mơ
            <br />
            bắt đầu từ đây
          </h1>

          <p className="hero-description">
            Đặt phòng resort dễ dàng, nhanh chóng và thông minh hơn
            <br />
            với công nghệ AI hiện đại.
          </p>

          <div className="features">
            <div>
              <span>🌴</span>
              <p>
                <b>Đa dạng resort</b>
                <br />
                trên toàn quốc
              </p>
            </div>

            <div>
              <span>▣</span>
              <p>
                <b>Thanh toán an toàn</b>
                <br />
                và linh hoạt
              </p>
            </div>

            <div>
              <span>🤖</span>
              <p>
                <b>Hỗ trợ 24/7</b>
                <br />
                với AI Chat
              </p>
            </div>
          </div>
        </div>

        {/* ================= SEARCH ================= */}
        <div className="search-box">
          <div className="search-item">
            <span className="search-icon">⌖</span>
            <div>
              <label>Điểm đến</label>
              <input placeholder="Nhập tên resort, địa điểm..." />
            </div>
          </div>

          <div className="search-item">
            <span className="search-icon">▣</span>
            <div>
              <label>Ngày nhận phòng</label>
              <input type="date" defaultValue="2026-09-26" />
            </div>
          </div>

          <div className="search-item">
            <span className="search-icon">▣</span>
            <div>
              <label>Ngày trả phòng</label>
              <input type="date" defaultValue="2026-09-29" />
            </div>
          </div>

          <div className="search-item">
            <span className="search-icon">♙</span>
            <div>
              <label>Số khách</label>
              <select>
                <option>2 người</option>
                <option>3 người</option>
                <option>4 người</option>
                <option>5 người</option>
              </select>
            </div>
          </div>

          <button className="search-btn">🔍 Tìm kiếm</button>
        </div>
      </section>

      {/* ================= RESORT ================= */}
      <section className="resort-section" id="resorts">
        <div className="section-header">
          <div>
            <h2>Resort nổi bật</h2>
            <p>Những điểm đến được yêu thích nhất</p>
          </div>

          <button className="see-all">Xem tất cả →</button>
        </div>

        <div className="resort-grid">
          {resorts.map((resort, index) => (
            <div className="resort-card" key={index}>
              <div className="image-wrapper">
                <img src={resort.image} alt={resort.name} />

                <div className="rating">⭐ {resort.rating}</div>

                <button className="favorite">♡</button>
              </div>

              <div className="card-content">
                <h3>{resort.name}</h3>

                <p className="location">📍 {resort.location}</p>

                <div className="price">
                  {resort.price}
                  <small> / đêm</small>
                </div>

                <button className="book-btn">Đặt phòng</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= AI SECTION ================= */}
      <section className="ai-section">
        <div className="ai-content">
          <div>
            <h2>Trải nghiệm AI Assistant</h2>

            <p>
              Hỏi đáp, tìm kiếm resort, nhận gợi ý cá nhân hóa
              <br />
              chỉ trong vài giây!
            </p>

            <button className="ai-button" onClick={() => setShowAI(true)}>
              💬 Chat ngay với AI
            </button>
          </div>

          <div className="robot">🤖</div>

          <div className="ai-suggestions">
            <div>
              💬 Gợi ý resort phù hợp
              <br />
              với ngân sách của tôi
            </div>

            <div>
              🏖️ Resort nào có bãi biển đẹp
              <br />ở Đà Nẵng?
            </div>

            <div>
              📅 Tôi muốn đặt phòng 3 ngày
              <br />
              cho 2 người, có hồ bơi
            </div>
          </div>
        </div>
      </section>

      {/* ================= BENEFITS ================= */}
      <section className="benefits" id="about">
        <div className="section-title">
          <h2>Vì sao chọn chúng tôi?</h2>
          <p>Trải nghiệm đặt phòng đơn giản và thông minh</p>
        </div>

        <div className="benefit-grid">
          <div className="benefit">
            <div className="benefit-icon">🛡️</div>
            <h3>Đặt phòng nhanh chóng</h3>
            <p>Chỉ vài bước đơn giản</p>
          </div>

          <div className="benefit">
            <div className="benefit-icon">🤖</div>
            <h3>AI hỗ trợ 24/7</h3>
            <p>Tư vấn thông minh, cá nhân hóa</p>
          </div>

          <div className="benefit">
            <div className="benefit-icon">💳</div>
            <h3>Thanh toán an toàn</h3>
            <p>Nhiều phương thức thanh toán</p>
          </div>

          <div className="benefit">
            <div className="benefit-icon">🎧</div>
            <h3>Hỗ trợ khách hàng</h3>
            <p>Luôn sẵn sàng giải đáp</p>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer id="contact">
        <div className="footer-logo">
          🌴 <b>ResortBooking</b>
          <span>AI</span>
          <p>Smart Booking · Better Holiday</p>
        </div>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#resorts">Resorts</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="social">Facebook &nbsp; YouTube &nbsp; Instagram</div>

        <p className="copyright">
          © 2026 Resort Booking System. All rights reserved.
        </p>
      </footer>

      {/* ================= AI CHAT ================= */}
      {showAI && (
        <div className="chat-window">
          <div className="chat-header">
            <div>
              <b>🤖 AI Assistant</b>
              <small>Hỗ trợ tìm kiếm resort và giải đáp mọi thắc mắc</small>
            </div>

            <button onClick={() => setShowAI(false)}>×</button>
          </div>

          <div className="chat-body">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={
                  msg.type === "user"
                    ? "message user-message"
                    : "message bot-message"
                }
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="chat-input">
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMessage();
              }}
              placeholder="Nhập tin nhắn..."
            />

            <button onClick={sendMessage}>➤</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
