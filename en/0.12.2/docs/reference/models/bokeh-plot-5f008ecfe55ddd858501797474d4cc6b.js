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
      };var element = document.getElementById("9f9ba22b-5158-4549-9e8a-b370a6530f57");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9f9ba22b-5158-4549-9e8a-b370a6530f57' but no matching script tag was found. ")
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
                  var docs_json = {"c379a938-c097-4e18-9227-e5b0fda55be8":{"roots":{"references":[{"attributes":{"callback":null},"id":"03815879-54d7-4701-bd6d-13f88f16ce3b","type":"DataRange1d"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#fdae6b"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"d27336ec-39a8-4201-9be5-3aeb3af0010a","type":"SquareX"},{"attributes":{},"id":"f2c51d8a-c3df-4675-990d-a37388910561","type":"BasicTicker"},{"attributes":{"below":[{"id":"cbadecc5-a3e3-46db-90de-09982542240b","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"e9d14826-5c09-4b0e-91c5-9e2a1d0be1d6","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"5f9e2348-3381-42c5-b194-36fc304bba96","type":"GlyphRenderer"},{"id":"cbadecc5-a3e3-46db-90de-09982542240b","type":"LinearAxis"},{"id":"e9d14826-5c09-4b0e-91c5-9e2a1d0be1d6","type":"LinearAxis"},{"id":"32efa487-e9e0-4444-b6e1-a0a11f6a52bc","type":"Grid"},{"id":"47933840-6963-4bbd-a1db-8042c7bbbe12","type":"Grid"}],"title":null,"tool_events":{"id":"49fb224e-7540-487b-abd0-edf147c57b9d","type":"ToolEvents"},"toolbar":{"id":"070f9f78-7b0a-4e1d-bfc4-5bb55fce244d","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"03815879-54d7-4701-bd6d-13f88f16ce3b","type":"DataRange1d"},"y_range":{"id":"7e9af41b-5dd7-4838-bbe0-9806ec63330a","type":"DataRange1d"}},"id":"52a00d59-e70d-4e51-853b-223665ce5f7f","type":"Plot"},{"attributes":{"data_source":{"id":"50294f3d-d785-4ff0-9e48-3de2c0e11684","type":"ColumnDataSource"},"glyph":{"id":"d27336ec-39a8-4201-9be5-3aeb3af0010a","type":"SquareX"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"5f9e2348-3381-42c5-b194-36fc304bba96","type":"GlyphRenderer"},{"attributes":{},"id":"2d98df8d-d57d-4148-a872-929e85bf86d9","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"2d98df8d-d57d-4148-a872-929e85bf86d9","type":"BasicTickFormatter"},"plot":{"id":"52a00d59-e70d-4e51-853b-223665ce5f7f","type":"Plot"},"ticker":{"id":"f2c51d8a-c3df-4675-990d-a37388910561","type":"BasicTicker"}},"id":"cbadecc5-a3e3-46db-90de-09982542240b","type":"LinearAxis"},{"attributes":{},"id":"6feaf072-ae53-4ae2-ac63-aa94769b681c","type":"BasicTicker"},{"attributes":{},"id":"dd41a849-7642-4f82-b74d-9d9c1db1e9d2","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"52a00d59-e70d-4e51-853b-223665ce5f7f","type":"Plot"},"ticker":{"id":"f2c51d8a-c3df-4675-990d-a37388910561","type":"BasicTicker"}},"id":"32efa487-e9e0-4444-b6e1-a0a11f6a52bc","type":"Grid"},{"attributes":{"formatter":{"id":"dd41a849-7642-4f82-b74d-9d9c1db1e9d2","type":"BasicTickFormatter"},"plot":{"id":"52a00d59-e70d-4e51-853b-223665ce5f7f","type":"Plot"},"ticker":{"id":"6feaf072-ae53-4ae2-ac63-aa94769b681c","type":"BasicTicker"}},"id":"e9d14826-5c09-4b0e-91c5-9e2a1d0be1d6","type":"LinearAxis"},{"attributes":{},"id":"49fb224e-7540-487b-abd0-edf147c57b9d","type":"ToolEvents"},{"attributes":{"dimension":1,"plot":{"id":"52a00d59-e70d-4e51-853b-223665ce5f7f","type":"Plot"},"ticker":{"id":"6feaf072-ae53-4ae2-ac63-aa94769b681c","type":"BasicTicker"}},"id":"47933840-6963-4bbd-a1db-8042c7bbbe12","type":"Grid"},{"attributes":{"callback":null,"column_names":["y","x","sizes"],"data":{"sizes":[10.0,11.25,12.5,13.75,15.0,16.25,17.5,18.75,20.0],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"50294f3d-d785-4ff0-9e48-3de2c0e11684","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"7e9af41b-5dd7-4838-bbe0-9806ec63330a","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"070f9f78-7b0a-4e1d-bfc4-5bb55fce244d","type":"Toolbar"}],"root_ids":["52a00d59-e70d-4e51-853b-223665ce5f7f"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"c379a938-c097-4e18-9227-e5b0fda55be8","elementid":"9f9ba22b-5158-4549-9e8a-b370a6530f57","modelid":"52a00d59-e70d-4e51-853b-223665ce5f7f"}];
                  
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