<template>
  <footer class="footer">
    <div class="container footer-content">
      <div class="footer-section">
        <h3>CodeMaster</h3>
        <p>Master coding with daily challenges and practice problems.</p>
      </div>
      <div class="footer-section">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Problems</a></li>
          <li><a href="#">Leaderboard</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h4>Resources</h4>
        <ul>
          <li><a href="#">Documentation</a></li>
          <li><a href="#">API</a></li>
          <li><a href="#">Help Center</a></li>
          <li><a href="#">Community</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h4>Connect</h4>
        <div class="social-links">
          <a href="#" class="social-link">
            <i class="fas fa-brands fa-github"></i>
          </a>
          <a href="#" class="social-link">
            <i class="fas fa-brands fa-twitter"></i>
          </a>
          <a href="#" class="social-link">
            <i class="fas fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container">
        <p>&copy; 2024 CodeMaster. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background: var(--bg-secondary);
  border-top: 1px solid var(--border-color);
  padding: 4rem 0 0;
  margin-top: 4rem;

  &-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 3rem;
    padding-bottom: 3rem;
  }

  &-section {
    h3 {
      color: var(--text-primary);
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }

    h4 {
      color: var(--text-primary);
      font-size: 1.1rem;
      margin-bottom: 1rem;
    }

    p {
      color: var(--text-secondary);
      line-height: 1.6;
    }

    ul {
      list-style: none;
      padding: 0;

      li {
        margin-bottom: 0.5rem;

        a {
          color: var(--text-secondary);
          text-decoration: none;
          transition: color 0.2s;

          &:hover {
            color: var(--primary-color);
          }
        }
      }
    }
  }

  .social-links {
    display: flex;
    gap: 1rem;

    .social-link {
      color: var(--text-secondary);
      font-size: 1.5rem;
      transition: color 0.2s;

      &:hover {
        color: var(--primary-color);
      }
    }
  }

  &-bottom {
    background: var(--bg-primary);
    padding: 1.5rem 0;
    border-top: 1px solid var(--border-color);
    
    p {
      color: var(--text-secondary);
      text-align: center;
      font-size: 0.9rem;
    }
  }
}</style>