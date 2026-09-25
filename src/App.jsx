import { useState } from 'react'
import './App.css'

const SOCIALS = [
  {
    label: 'GitHub',
    href: 'https://github.com',
    icon: (
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.4-5.25 5.68.41.36.78 1.06.78 2.14 0 1.54-.01 2.79-.01 3.17 0 .3.2.66.79.55A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    ),
  },
  {
    label: 'X',
    href: 'https://x.com',
    icon: (
      <path d="M18.24 2H21l-6.55 7.49L22 22h-6.19l-4.84-6.32L5.4 22H2.6l7.02-8.02L2 2h6.34l4.38 5.78L18.24 2Zm-1.08 18.17h1.53L7.01 3.75H5.37l11.79 16.42Z" />
    ),
  },
]

function ProfileCard() {
  const [following, setFollowing] = useState(false)
  const followerCount = 1284 + (following ? 1 : 0)

  return (
    <div id="center">
      <article className="profile-card">
        <div className="cover" />
        <div className="avatar" aria-hidden="true">AL</div>

        <h1 className="name">Ada Lovelace</h1>
        <p className="role">Frontend Engineer &middot; StoreHUBX</p>
        <p className="bio">
          Building small, sharp UI components. Currently obsessed with
          build pipelines and design systems.
        </p>

        <dl className="stats">
          <div className="stat">
            <dt>Repos</dt>
            <dd>37</dd>
          </div>
          <div className="stat">
            <dt>Followers</dt>
            <dd>{followerCount.toLocaleString()}</dd>
          </div>
          <div className="stat">
            <dt>Following</dt>
            <dd>112</dd>
          </div>
        </dl>

        <div className="actions">
          <button
            type="button"
            className={`follow-btn${following ? ' is-following' : ''}`}
            onClick={() => setFollowing((f) => !f)}
          >
            {following ? 'Following' : 'Follow'}
          </button>

          <div className="socials">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="social-link"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  {s.icon}
                </svg>
              </a>
            ))}
          </div>
        </div>
      </article>
    </div>
  )
}

export default ProfileCard
