/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

    /***************************************************************************
     *                                                                          *
     * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
     * etc. depending on your default view engine) your home page.              *
     *                                                                          *
     * (Alternatively, remove this and add an `index.html` file in your         *
     * `assets` directory)                                                      *
     *                                                                          *
     ***************************************************************************/

    /** USER MODEL */
    // login user
    'POST /users/login': 'UserController.login',
    // create user
    'POST /users/signup': 'UserController.signup',
    // can't get all user
    'GET /users': 'UserController.actionForbidden',
    // update user
    'PUT /users/:username': 'UserController.updateEmail',
    // get user
    'GET /users/:username': 'UserController.getUser',
    // delete user
    'DELETE /users/:username': 'UserController.deleteUser',

    /** ROUTE MODEL */
    // get all routes belonging to a user
    'GET /users/:username/routes': 'RouteController.getRoutes',
    // get a particular route
    'GET /users/:username/routes/:routename': 'RouteController.getRoute',
    // create a route
    'POST /users/:username/routes': 'RouteController.createRoute',
    // update a route
    'PUT /users/:username/routes/:routename': 'RouteController.updateRoute',
    // destroy a route
    'DELETE /users/:username/routes/:routename': 'RouteController.deleteRoute',

    /** BLOG MODEL */
    // get all blogs belonging to a route
    'GET /users/:username/routes/:routename/blogs': 'BlogController.getBlogs',
    // get one blog
    'GET /users/:username/routes/:routename/blogs/:blogid': 'BlogController.getBlog',
    // create a blog
    'POST /users/:username/routes/:routename/blogs': 'BlogController.createBlog',
    // update a blog
    'PUT /users/:username/routes/:routename/blogs/:blogid': 'BlogController.updateBlog',
    // delete a blog
    'DELETE /users/:username/routes/:routename/blogs/:blogid': 'BlogController.deleteBlog',


    /***************************************************************************
     *                                                                          *
     * Custom routes here...                                                    *
     *                                                                          *
     * If a request to a URL doesn't match any of the custom routes above, it   *
     * is matched against Sails route blueprints. See `config/blueprints.js`    *
     * for configuration options and examples.                                  *
     *                                                                          *
     ***************************************************************************/

};
