(function() {
  var fn = function() {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force === true) {
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
      };var element = document.getElementById("a8735f05-cd73-4992-89b0-6cbae7193e97");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a8735f05-cd73-4992-89b0-6cbae7193e97' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"ec8535aa-c995-4db0-920b-01411ff36e4b":{"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"f5415dc5-8c37-4952-b4b2-3bc23bd3a98f","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"a38dcf73-36f6-4a94-ac88-61a2a14c5d70","type":"Circle"},{"attributes":{"below":[{"id":"4cc1b73b-df08-40dc-9b81-b23b5f6abdac","type":"LinearAxis"}],"left":[{"id":"e157f459-85f1-444e-b60d-3cae8860857a","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"4cc1b73b-df08-40dc-9b81-b23b5f6abdac","type":"LinearAxis"},{"id":"404e089f-52cf-4c93-b882-e679bba8984f","type":"Grid"},{"id":"e157f459-85f1-444e-b60d-3cae8860857a","type":"LinearAxis"},{"id":"70047076-a023-40c6-9fb6-75798dc94440","type":"Grid"},{"id":"f5415dc5-8c37-4952-b4b2-3bc23bd3a98f","type":"BoxAnnotation"},{"id":"54057430-3bd0-4891-83c0-bdd2740d0a64","type":"GlyphRenderer"}],"title":null,"tool_events":{"id":"71c492e6-5e73-491f-b0a2-53334af3aca5","type":"ToolEvents"},"toolbar":{"id":"abb88262-a165-4d31-b26e-26bc2770ae58","type":"Toolbar"},"toolbar_location":"below","toolbar_sticky":false,"x_range":{"id":"abbd7487-4526-411b-89fc-d9ab09616cc0","type":"DataRange1d"},"y_range":{"id":"2e265cfd-67cc-4d4d-be55-709e9b9c5bef","type":"DataRange1d"}},"id":"71c34241-5e9a-4da8-8a5c-c848215ec5a1","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"71c34241-5e9a-4da8-8a5c-c848215ec5a1","subtype":"Figure","type":"Plot"}},"id":"cdf7dff7-f806-4784-bd97-6b9f4ddee4ab","type":"SaveTool"},{"attributes":{"plot":{"id":"71c34241-5e9a-4da8-8a5c-c848215ec5a1","subtype":"Figure","type":"Plot"}},"id":"df8dfbdd-7ac2-4f3b-92ad-aab870b0385a","type":"PanTool"},{"attributes":{"overlay":{"id":"f5415dc5-8c37-4952-b4b2-3bc23bd3a98f","type":"BoxAnnotation"},"plot":{"id":"71c34241-5e9a-4da8-8a5c-c848215ec5a1","subtype":"Figure","type":"Plot"}},"id":"b8339085-ae6b-4645-ba55-bf991347cb2f","type":"BoxZoomTool"},{"attributes":{},"id":"d5c09a1b-a815-4567-aec6-65ac8817b3c7","type":"BasicTicker"},{"attributes":{"plot":{"id":"71c34241-5e9a-4da8-8a5c-c848215ec5a1","subtype":"Figure","type":"Plot"},"ticker":{"id":"99612476-124b-4d51-9ed1-bf799797d0f1","type":"BasicTicker"}},"id":"404e089f-52cf-4c93-b882-e679bba8984f","type":"Grid"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"df8dfbdd-7ac2-4f3b-92ad-aab870b0385a","type":"PanTool"},{"id":"03401f79-c014-44e3-9e45-1680e0edd878","type":"WheelZoomTool"},{"id":"b8339085-ae6b-4645-ba55-bf991347cb2f","type":"BoxZoomTool"},{"id":"cdf7dff7-f806-4784-bd97-6b9f4ddee4ab","type":"SaveTool"},{"id":"74dc2954-8313-4847-b441-6d38b8a316ff","type":"ResetTool"},{"id":"9238e9f3-1139-4ad4-80d3-c2307d06b513","type":"HelpTool"}]},"id":"abb88262-a165-4d31-b26e-26bc2770ae58","type":"Toolbar"},{"attributes":{"formatter":{"id":"b56f5732-351d-465a-9bd8-62738668fead","type":"BasicTickFormatter"},"plot":{"id":"71c34241-5e9a-4da8-8a5c-c848215ec5a1","subtype":"Figure","type":"Plot"},"ticker":{"id":"d5c09a1b-a815-4567-aec6-65ac8817b3c7","type":"BasicTicker"}},"id":"e157f459-85f1-444e-b60d-3cae8860857a","type":"LinearAxis"},{"attributes":{"plot":{"id":"71c34241-5e9a-4da8-8a5c-c848215ec5a1","subtype":"Figure","type":"Plot"}},"id":"9238e9f3-1139-4ad4-80d3-c2307d06b513","type":"HelpTool"},{"attributes":{"data_source":{"id":"f4578ff7-f38a-4e90-a71e-1b4f3147403f","type":"ColumnDataSource"},"glyph":{"id":"ce9b7d75-07cd-4955-85cc-352b9771750c","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a38dcf73-36f6-4a94-ac88-61a2a14c5d70","type":"Circle"},"selection_glyph":null},"id":"54057430-3bd0-4891-83c0-bdd2740d0a64","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"2e265cfd-67cc-4d4d-be55-709e9b9c5bef","type":"DataRange1d"},{"attributes":{"callback":null},"id":"abbd7487-4526-411b-89fc-d9ab09616cc0","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"ce9b7d75-07cd-4955-85cc-352b9771750c","type":"Circle"},{"attributes":{},"id":"683da4c1-d02f-46c9-8c16-9be0c9f3ecf5","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"f4578ff7-f38a-4e90-a71e-1b4f3147403f","type":"ColumnDataSource"},{"attributes":{},"id":"99612476-124b-4d51-9ed1-bf799797d0f1","type":"BasicTicker"},{"attributes":{},"id":"b56f5732-351d-465a-9bd8-62738668fead","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"683da4c1-d02f-46c9-8c16-9be0c9f3ecf5","type":"BasicTickFormatter"},"plot":{"id":"71c34241-5e9a-4da8-8a5c-c848215ec5a1","subtype":"Figure","type":"Plot"},"ticker":{"id":"99612476-124b-4d51-9ed1-bf799797d0f1","type":"BasicTicker"}},"id":"4cc1b73b-df08-40dc-9b81-b23b5f6abdac","type":"LinearAxis"},{"attributes":{"plot":{"id":"71c34241-5e9a-4da8-8a5c-c848215ec5a1","subtype":"Figure","type":"Plot"}},"id":"74dc2954-8313-4847-b441-6d38b8a316ff","type":"ResetTool"},{"attributes":{"dimension":1,"plot":{"id":"71c34241-5e9a-4da8-8a5c-c848215ec5a1","subtype":"Figure","type":"Plot"},"ticker":{"id":"d5c09a1b-a815-4567-aec6-65ac8817b3c7","type":"BasicTicker"}},"id":"70047076-a023-40c6-9fb6-75798dc94440","type":"Grid"},{"attributes":{},"id":"71c492e6-5e73-491f-b0a2-53334af3aca5","type":"ToolEvents"},{"attributes":{"plot":{"id":"71c34241-5e9a-4da8-8a5c-c848215ec5a1","subtype":"Figure","type":"Plot"}},"id":"03401f79-c014-44e3-9e45-1680e0edd878","type":"WheelZoomTool"}],"root_ids":["71c34241-5e9a-4da8-8a5c-c848215ec5a1"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"ec8535aa-c995-4db0-920b-01411ff36e4b","elementid":"a8735f05-cd73-4992-89b0-6cbae7193e97","modelid":"71c34241-5e9a-4da8-8a5c-c848215ec5a1"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
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
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
