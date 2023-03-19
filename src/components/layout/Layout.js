import Navigation from './Navigation';

const Layout = ( { children } ) =>
{

  return (
    <div className="min-h-screen w-full flex flex-col app-background">
      <div className="container mx-auto px-10">
        <Navigation />
        <div>{ children }</div>
      </div>
    </div>
  );
};

export default Layout;