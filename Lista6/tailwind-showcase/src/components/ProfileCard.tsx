function ProfileCard({ name, title, location, avatar }: {
  name: string
  title: string
  location: string
  avatar: string
}) {
  return (
    <div className="card flex items-center gap-5">
      <div className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0 bg-blue-500 text-white">
        {avatar}
      </div>
      <div>
        <h2 className="text-2xl font-bold m-0">{name}</h2>
        <p className="mt-1 text-sm font-medium opacity-75 m-0">{title}</p>
        <p className="mt-1 text-xs opacity-60 m-0">{location}</p>
      </div>
    </div>
  )
}

export default ProfileCard
