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
      };var element = document.getElementById("7d1b83e1-767e-49fc-9184-d1a921d646e3");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '7d1b83e1-767e-49fc-9184-d1a921d646e3' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"1079e7c1-e794-414d-9c91-084a7c02a314":{"roots":{"references":[{"attributes":{"callback":null},"id":"83e46bb1-4e41-4653-aa9f-a7af11bf0182","type":"DataRange1d"},{"attributes":{},"id":"df1e9ea4-a29a-4e28-80dc-0735bfc3b1da","type":"ToolEvents"},{"attributes":{"data_source":{"id":"4da6817f-02ac-4f6f-8d82-4c65a8727aa4","type":"ColumnDataSource"},"glyph":{"id":"70ce8280-74fd-4c1d-aa00-9b0286244a4c","type":"InvertedTriangle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"206e05cb-ce8d-4ed6-9139-6e93af0a2a15","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","sizes"],"data":{"sizes":[10.0,11.25,12.5,13.75,15.0,16.25,17.5,18.75,20.0],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"4da6817f-02ac-4f6f-8d82-4c65a8727aa4","type":"ColumnDataSource"},{"attributes":{},"id":"07bc80e8-5221-4717-a3a3-6a6d8e023151","type":"BasicTicker"},{"attributes":{"plot":{"id":"f4cefc15-4b44-484d-b0c8-a3466ece4c26","type":"Plot"},"ticker":{"id":"07bc80e8-5221-4717-a3a3-6a6d8e023151","type":"BasicTicker"}},"id":"06b8eb2e-41e9-4a6e-ba2a-36c161c5a358","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"f4cefc15-4b44-484d-b0c8-a3466ece4c26","type":"Plot"},"ticker":{"id":"e694fa5f-9462-40dc-96b5-160288bc4364","type":"BasicTicker"}},"id":"9f2be372-4efb-4b80-b18e-7d0b24d64a26","type":"Grid"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#de2d26"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"70ce8280-74fd-4c1d-aa00-9b0286244a4c","type":"InvertedTriangle"},{"attributes":{},"id":"d23c8ba6-ccbf-4cd0-89d9-5df37f2c6edf","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"1c2a3bcd-bd86-4619-a561-6b3d8cf63297","type":"Toolbar"},{"attributes":{},"id":"e694fa5f-9462-40dc-96b5-160288bc4364","type":"BasicTicker"},{"attributes":{},"id":"3ad2a6cb-03c7-45ea-997e-dcb3338fe795","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"a05c27f7-69ef-4153-b746-a6f21ab1c5d6","type":"DataRange1d"},{"attributes":{"below":[{"id":"e05d3e5a-e7a0-4676-bf7a-a4372284bcbc","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"6fd6a6fd-3b59-447b-9699-c7eacc70b57b","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"206e05cb-ce8d-4ed6-9139-6e93af0a2a15","type":"GlyphRenderer"},{"id":"e05d3e5a-e7a0-4676-bf7a-a4372284bcbc","type":"LinearAxis"},{"id":"6fd6a6fd-3b59-447b-9699-c7eacc70b57b","type":"LinearAxis"},{"id":"06b8eb2e-41e9-4a6e-ba2a-36c161c5a358","type":"Grid"},{"id":"9f2be372-4efb-4b80-b18e-7d0b24d64a26","type":"Grid"}],"title":null,"tool_events":{"id":"df1e9ea4-a29a-4e28-80dc-0735bfc3b1da","type":"ToolEvents"},"toolbar":{"id":"1c2a3bcd-bd86-4619-a561-6b3d8cf63297","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"a05c27f7-69ef-4153-b746-a6f21ab1c5d6","type":"DataRange1d"},"y_range":{"id":"83e46bb1-4e41-4653-aa9f-a7af11bf0182","type":"DataRange1d"}},"id":"f4cefc15-4b44-484d-b0c8-a3466ece4c26","type":"Plot"},{"attributes":{"formatter":{"id":"3ad2a6cb-03c7-45ea-997e-dcb3338fe795","type":"BasicTickFormatter"},"plot":{"id":"f4cefc15-4b44-484d-b0c8-a3466ece4c26","type":"Plot"},"ticker":{"id":"e694fa5f-9462-40dc-96b5-160288bc4364","type":"BasicTicker"}},"id":"6fd6a6fd-3b59-447b-9699-c7eacc70b57b","type":"LinearAxis"},{"attributes":{"formatter":{"id":"d23c8ba6-ccbf-4cd0-89d9-5df37f2c6edf","type":"BasicTickFormatter"},"plot":{"id":"f4cefc15-4b44-484d-b0c8-a3466ece4c26","type":"Plot"},"ticker":{"id":"07bc80e8-5221-4717-a3a3-6a6d8e023151","type":"BasicTicker"}},"id":"e05d3e5a-e7a0-4676-bf7a-a4372284bcbc","type":"LinearAxis"}],"root_ids":["f4cefc15-4b44-484d-b0c8-a3466ece4c26"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"1079e7c1-e794-414d-9c91-084a7c02a314","elementid":"7d1b83e1-767e-49fc-9184-d1a921d646e3","modelid":"f4cefc15-4b44-484d-b0c8-a3466ece4c26"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.css");
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