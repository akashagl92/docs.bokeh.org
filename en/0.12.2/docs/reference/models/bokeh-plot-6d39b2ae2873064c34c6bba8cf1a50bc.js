document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = "";
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force !== "") {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        delete window._bokeh_onload_callbacks
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        window._bokeh_onload_callbacks.push(callback);
        if (window._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        window._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            window._bokeh_is_loading--;
            if (window._bokeh_is_loading === 0) {
              console.log("Bokeh: all BokehJS libraries loaded");
              run_callbacks()
            }
          };
          s.onerror = function() {
            console.warn("failed to load library " + url);
          };
          console.log("Bokeh: injecting script tag for BokehJS library: ", url);
          document.getElementsByTagName("head")[0].appendChild(s);
        }
      };var element = document.getElementById("62fcc955-5860-49b3-887a-dd329d6cbf0a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '62fcc955-5860-49b3-887a-dd329d6cbf0a' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.2.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"afd5d63f-d0e8-4511-8933-e97fc04fd209":{"roots":{"references":[{"attributes":{},"id":"ad53c8e3-0741-42e6-8c54-10f9196da9d4","type":"BasicTicker"},{"attributes":{"formatter":{"id":"69d7108e-a3b6-463a-9ebb-0510231c7874","type":"BasicTickFormatter"},"plot":{"id":"e21fa7cf-59a8-4562-bb88-e879d8cef19b","type":"Plot"},"ticker":{"id":"53a46272-e42a-48a9-8db8-3a0160837705","type":"BasicTicker"}},"id":"1f382456-b963-4ab8-9c24-c7a5eba35dc3","type":"LinearAxis"},{"attributes":{"data_source":{"id":"9718db39-1d2e-471f-98c3-4ed1aa1709a3","type":"ColumnDataSource"},"glyph":{"id":"fc0aebdc-b2c6-40b0-be1d-16d8257e6b7c","type":"AnnularWedge"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"8ddb2175-dfeb-41ba-92f0-4c158f1fb387","type":"GlyphRenderer"},{"attributes":{},"id":"fb9bac01-8b0f-4fab-98c6-94018f61a7ef","type":"ToolEvents"},{"attributes":{"dimension":1,"plot":{"id":"e21fa7cf-59a8-4562-bb88-e879d8cef19b","type":"Plot"},"ticker":{"id":"ad53c8e3-0741-42e6-8c54-10f9196da9d4","type":"BasicTicker"}},"id":"7d1afd8f-de78-4a1a-9078-35cd959a61e7","type":"Grid"},{"attributes":{"plot":{"id":"e21fa7cf-59a8-4562-bb88-e879d8cef19b","type":"Plot"},"ticker":{"id":"53a46272-e42a-48a9-8db8-3a0160837705","type":"BasicTicker"}},"id":"f359bc4e-4443-460d-9e60-9ddf73865293","type":"Grid"},{"attributes":{"callback":null,"column_names":["y","x","r"],"data":{"r":[0.23333333333333336,0.275,0.3166666666666667,0.35833333333333334,0.4,0.4416666666666667,0.48333333333333334,0.525,0.5666666666666667],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"9718db39-1d2e-471f-98c3-4ed1aa1709a3","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"33a9b647-4154-4a37-992e-37c145a0cda7","type":"DataRange1d"},{"attributes":{},"id":"69d7108e-a3b6-463a-9ebb-0510231c7874","type":"BasicTickFormatter"},{"attributes":{},"id":"53a46272-e42a-48a9-8db8-3a0160837705","type":"BasicTicker"},{"attributes":{"below":[{"id":"1f382456-b963-4ab8-9c24-c7a5eba35dc3","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"69becdc4-f417-4644-9965-fcc965abb41a","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"8ddb2175-dfeb-41ba-92f0-4c158f1fb387","type":"GlyphRenderer"},{"id":"1f382456-b963-4ab8-9c24-c7a5eba35dc3","type":"LinearAxis"},{"id":"69becdc4-f417-4644-9965-fcc965abb41a","type":"LinearAxis"},{"id":"f359bc4e-4443-460d-9e60-9ddf73865293","type":"Grid"},{"id":"7d1afd8f-de78-4a1a-9078-35cd959a61e7","type":"Grid"}],"title":null,"tool_events":{"id":"fb9bac01-8b0f-4fab-98c6-94018f61a7ef","type":"ToolEvents"},"toolbar":{"id":"ada08bd0-b8f0-4197-9a08-bfbe7c5f8e92","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"33a9b647-4154-4a37-992e-37c145a0cda7","type":"DataRange1d"},"y_range":{"id":"57ea1129-9cbd-4985-9aef-dd8682ea1b83","type":"DataRange1d"}},"id":"e21fa7cf-59a8-4562-bb88-e879d8cef19b","type":"Plot"},{"attributes":{},"id":"5f576319-aa26-4c67-a3dd-5351310bc8f7","type":"BasicTickFormatter"},{"attributes":{"end_angle":{"units":"rad","value":4.1},"fill_color":{"value":"#8888ee"},"inner_radius":{"units":"data","value":0.2},"outer_radius":{"field":"r","units":"data"},"start_angle":{"units":"rad","value":0.6},"x":{"field":"x"},"y":{"field":"y"}},"id":"fc0aebdc-b2c6-40b0-be1d-16d8257e6b7c","type":"AnnularWedge"},{"attributes":{"formatter":{"id":"5f576319-aa26-4c67-a3dd-5351310bc8f7","type":"BasicTickFormatter"},"plot":{"id":"e21fa7cf-59a8-4562-bb88-e879d8cef19b","type":"Plot"},"ticker":{"id":"ad53c8e3-0741-42e6-8c54-10f9196da9d4","type":"BasicTicker"}},"id":"69becdc4-f417-4644-9965-fcc965abb41a","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"ada08bd0-b8f0-4197-9a08-bfbe7c5f8e92","type":"Toolbar"},{"attributes":{"callback":null},"id":"57ea1129-9cbd-4985-9aef-dd8682ea1b83","type":"DataRange1d"}],"root_ids":["e21fa7cf-59a8-4562-bb88-e879d8cef19b"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"afd5d63f-d0e8-4511-8933-e97fc04fd209","elementid":"62fcc955-5860-49b3-887a-dd329d6cbf0a","modelid":"e21fa7cf-59a8-4562-bb88-e879d8cef19b"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i](window.Bokeh);
        }
        
      }
    
      if (window._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(this));
});