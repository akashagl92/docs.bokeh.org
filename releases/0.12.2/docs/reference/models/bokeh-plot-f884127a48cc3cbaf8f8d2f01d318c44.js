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
      };var element = document.getElementById("6346c57c-10aa-4535-9ec3-121cae5a357f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '6346c57c-10aa-4535-9ec3-121cae5a357f' but no matching script tag was found. ")
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
                  var docs_json = {"d8e551d4-f2d1-491e-a834-190e38a589b2":{"roots":{"references":[{"attributes":{"callback":null},"id":"a8795768-c3b2-44e9-a2fa-319d6dd83886","type":"DataRange1d"},{"attributes":{},"id":"6d136f73-e7f5-47ed-84f9-6504d7e0fe90","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"54ecbc00-1d7e-42c6-9d4b-2cf8fd680990","type":"DataRange1d"},{"attributes":{},"id":"46798ca6-949a-4df8-8000-c82dc5987a6f","type":"BasicTickFormatter"},{"attributes":{},"id":"27d9e034-503a-4c05-a50b-665bbf643f30","type":"BasicTicker"},{"attributes":{"formatter":{"id":"46798ca6-949a-4df8-8000-c82dc5987a6f","type":"BasicTickFormatter"},"plot":{"id":"73979cbf-967c-4161-9f13-792bd15a780e","type":"Plot"},"ticker":{"id":"ee91621f-d0be-4a1e-ab38-df3f2e26cd6a","type":"BasicTicker"}},"id":"b772473b-05ec-45c9-a0a5-5228182a1193","type":"LinearAxis"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#fb8072"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"e45b447d-37f6-47f5-a8ce-436237285f34","type":"CircleCross"},{"attributes":{},"id":"ee91621f-d0be-4a1e-ab38-df3f2e26cd6a","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"73979cbf-967c-4161-9f13-792bd15a780e","type":"Plot"},"ticker":{"id":"27d9e034-503a-4c05-a50b-665bbf643f30","type":"BasicTicker"}},"id":"74937e1f-35ae-48a4-976e-55c7856a3413","type":"Grid"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"c0b9bf43-cc9a-448c-8232-47a04afbc1ba","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["y","x","sizes"],"data":{"sizes":[10.0,11.25,12.5,13.75,15.0,16.25,17.5,18.75,20.0],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"0500af65-11fb-439a-91d6-a02f59e6cefd","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"b772473b-05ec-45c9-a0a5-5228182a1193","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"64fefee0-e491-42ff-9682-f9758f8fffe7","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"1bbc05b0-9861-4e1f-8ec0-b25c97af8461","type":"GlyphRenderer"},{"id":"b772473b-05ec-45c9-a0a5-5228182a1193","type":"LinearAxis"},{"id":"64fefee0-e491-42ff-9682-f9758f8fffe7","type":"LinearAxis"},{"id":"2cb28052-d41e-440f-98f3-c64445bc810c","type":"Grid"},{"id":"74937e1f-35ae-48a4-976e-55c7856a3413","type":"Grid"}],"title":null,"tool_events":{"id":"a85eff58-1b17-4d07-9a82-86e2abbf894b","type":"ToolEvents"},"toolbar":{"id":"c0b9bf43-cc9a-448c-8232-47a04afbc1ba","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"a8795768-c3b2-44e9-a2fa-319d6dd83886","type":"DataRange1d"},"y_range":{"id":"54ecbc00-1d7e-42c6-9d4b-2cf8fd680990","type":"DataRange1d"}},"id":"73979cbf-967c-4161-9f13-792bd15a780e","type":"Plot"},{"attributes":{"plot":{"id":"73979cbf-967c-4161-9f13-792bd15a780e","type":"Plot"},"ticker":{"id":"ee91621f-d0be-4a1e-ab38-df3f2e26cd6a","type":"BasicTicker"}},"id":"2cb28052-d41e-440f-98f3-c64445bc810c","type":"Grid"},{"attributes":{},"id":"a85eff58-1b17-4d07-9a82-86e2abbf894b","type":"ToolEvents"},{"attributes":{"formatter":{"id":"6d136f73-e7f5-47ed-84f9-6504d7e0fe90","type":"BasicTickFormatter"},"plot":{"id":"73979cbf-967c-4161-9f13-792bd15a780e","type":"Plot"},"ticker":{"id":"27d9e034-503a-4c05-a50b-665bbf643f30","type":"BasicTicker"}},"id":"64fefee0-e491-42ff-9682-f9758f8fffe7","type":"LinearAxis"},{"attributes":{"data_source":{"id":"0500af65-11fb-439a-91d6-a02f59e6cefd","type":"ColumnDataSource"},"glyph":{"id":"e45b447d-37f6-47f5-a8ce-436237285f34","type":"CircleCross"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"1bbc05b0-9861-4e1f-8ec0-b25c97af8461","type":"GlyphRenderer"}],"root_ids":["73979cbf-967c-4161-9f13-792bd15a780e"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"d8e551d4-f2d1-491e-a834-190e38a589b2","elementid":"6346c57c-10aa-4535-9ec3-121cae5a357f","modelid":"73979cbf-967c-4161-9f13-792bd15a780e"}];
                  
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