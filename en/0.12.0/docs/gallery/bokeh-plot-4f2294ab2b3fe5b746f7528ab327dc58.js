document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined") {
        window._bokeh_onload_callbacks = [];
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
      };var element = document.getElementById("5b4309f3-9c99-4dc8-8afd-910659b814f9");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '5b4309f3-9c99-4dc8-8afd-910659b814f9' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.0.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"9145b94e-44f7-417f-af22-9b974ed82309":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["y","x","line_color","fill_color"],"data":{"fill_color":["red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue"],"line_color":["red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue"],"x":[1.4,1.4,1.3,1.5,1.4,1.7,1.4,1.5,1.4,1.5,1.5,1.6,1.4,1.1,1.2,1.5,1.3,1.4,1.7,1.5,1.7,1.5,1.0,1.7,1.9,1.6,1.6,1.5,1.4,1.6,1.6,1.5,1.5,1.4,1.5,1.2,1.3,1.4,1.3,1.5,1.3,1.3,1.3,1.6,1.9,1.4,1.6,1.4,1.5,1.4,4.7,4.5,4.9,4.0,4.6,4.5,4.7,3.3,4.6,3.9,3.5,4.2,4.0,4.7,3.6,4.4,4.5,4.1,4.5,3.9,4.8,4.0,4.9,4.7,4.3,4.4,4.8,5.0,4.5,3.5,3.8,3.7,3.9,5.1,4.5,4.5,4.7,4.4,4.1,4.0,4.4,4.6,4.0,3.3,4.2,4.2,4.2,4.3,3.0,4.1,6.0,5.1,5.9,5.6,5.8,6.6,4.5,6.3,5.8,6.1,5.1,5.3,5.5,5.0,5.1,5.3,5.5,6.7,6.9,5.0,5.7,4.9,6.7,4.9,5.7,6.0,4.8,4.9,5.6,5.8,6.1,6.4,5.6,5.1,5.6,6.1,5.6,5.5,4.8,5.4,5.6,5.1,5.1,5.9,5.7,5.2,5.0,5.2,5.4,5.1],"y":[0.2,0.2,0.2,0.2,0.2,0.4,0.3,0.2,0.2,0.1,0.2,0.2,0.1,0.1,0.2,0.4,0.4,0.3,0.3,0.3,0.2,0.4,0.2,0.5,0.2,0.2,0.4,0.2,0.2,0.2,0.2,0.4,0.1,0.2,0.2,0.2,0.2,0.1,0.2,0.2,0.3,0.3,0.2,0.6,0.4,0.3,0.2,0.2,0.2,0.2,1.4,1.5,1.5,1.3,1.5,1.3,1.6,1.0,1.3,1.4,1.0,1.5,1.0,1.4,1.3,1.4,1.5,1.0,1.5,1.1,1.8,1.3,1.5,1.2,1.3,1.4,1.4,1.7,1.5,1.0,1.1,1.0,1.2,1.6,1.5,1.6,1.5,1.3,1.3,1.3,1.2,1.4,1.2,1.0,1.3,1.2,1.3,1.3,1.1,1.3,2.5,1.9,2.1,1.8,2.2,2.1,1.7,1.8,1.8,2.5,2.0,1.9,2.1,2.0,2.4,2.3,1.8,2.2,2.3,1.5,2.3,2.0,2.0,1.8,2.1,1.8,1.8,1.8,2.1,1.6,1.9,2.0,2.2,1.5,1.4,2.3,2.4,1.8,1.8,2.1,2.4,2.3,1.9,2.3,2.5,2.3,1.9,2.0,2.3,1.8]}},"id":"8f9e5ee8-934e-4e38-9652-cd736399516c","type":"ColumnDataSource"},{"attributes":{},"id":"82a13177-3498-4102-b4bd-fa068f66108a","type":"BasicTicker"},{"attributes":{"plot":{"id":"360bda9f-ce8e-4bc9-9d70-4b2d4d62a548","subtype":"Figure","type":"Plot"}},"id":"8d52c842-286c-4020-b0ca-b53b137d2329","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"360bda9f-ce8e-4bc9-9d70-4b2d4d62a548","subtype":"Figure","type":"Plot"},"ticker":{"id":"da844bcb-1ece-4d66-82df-a170df97a9f2","type":"BasicTicker"}},"id":"30219b30-3d72-4326-bf6e-b148047a27a3","type":"Grid"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"3336cd27-2212-4ad7-85f4-74b27ec89c1a","type":"PanTool"},{"id":"8d52c842-286c-4020-b0ca-b53b137d2329","type":"WheelZoomTool"},{"id":"7029f9c0-e5d0-4f01-9533-2e71083aa80c","type":"BoxZoomTool"},{"id":"5967b356-3200-40ed-8bb3-7a7ae1306486","type":"SaveTool"},{"id":"9b995e4e-aea2-4ac9-bdb8-4c53f170ea6f","type":"ResetTool"},{"id":"26baba28-f9c3-478f-90a0-8aa06877952e","type":"HelpTool"}]},"id":"8669600b-f802-4677-bad8-067c4cbe9683","type":"Toolbar"},{"attributes":{"callback":null},"id":"3f35b307-33be-4182-9356-a2f7519830cd","type":"DataRange1d"},{"attributes":{"below":[{"id":"f34a69b9-4704-4ba5-bd21-4d25995b8851","type":"LinearAxis"}],"left":[{"id":"5bee5797-dc6d-4eb2-9331-ed456fb0d7c7","type":"LinearAxis"}],"renderers":[{"id":"f34a69b9-4704-4ba5-bd21-4d25995b8851","type":"LinearAxis"},{"id":"30219b30-3d72-4326-bf6e-b148047a27a3","type":"Grid"},{"id":"5bee5797-dc6d-4eb2-9331-ed456fb0d7c7","type":"LinearAxis"},{"id":"70797fd8-df2a-4966-945c-08af5f76e62d","type":"Grid"},{"id":"007cee34-05e3-4b2f-8a50-bcd81a6644b0","type":"BoxAnnotation"},{"id":"e43842c6-8eb4-46e2-913f-03439f215e6d","type":"GlyphRenderer"}],"title":{"id":"c6fe3847-7ec3-4a41-90c7-b93278aae6ef","type":"Title"},"tool_events":{"id":"363ac713-dde8-4dce-a41d-c1520d4d0899","type":"ToolEvents"},"toolbar":{"id":"8669600b-f802-4677-bad8-067c4cbe9683","type":"Toolbar"},"x_range":{"id":"3f35b307-33be-4182-9356-a2f7519830cd","type":"DataRange1d"},"y_range":{"id":"9c0151de-9804-4ff6-a597-9490d917165b","type":"DataRange1d"}},"id":"360bda9f-ce8e-4bc9-9d70-4b2d4d62a548","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"da844bcb-1ece-4d66-82df-a170df97a9f2","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"360bda9f-ce8e-4bc9-9d70-4b2d4d62a548","subtype":"Figure","type":"Plot"},"ticker":{"id":"82a13177-3498-4102-b4bd-fa068f66108a","type":"BasicTicker"}},"id":"70797fd8-df2a-4966-945c-08af5f76e62d","type":"Grid"},{"attributes":{"plot":{"id":"360bda9f-ce8e-4bc9-9d70-4b2d4d62a548","subtype":"Figure","type":"Plot"}},"id":"3336cd27-2212-4ad7-85f4-74b27ec89c1a","type":"PanTool"},{"attributes":{"plot":null,"text":"Iris Morphology"},"id":"c6fe3847-7ec3-4a41-90c7-b93278aae6ef","type":"Title"},{"attributes":{"plot":{"id":"360bda9f-ce8e-4bc9-9d70-4b2d4d62a548","subtype":"Figure","type":"Plot"}},"id":"9b995e4e-aea2-4ac9-bdb8-4c53f170ea6f","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"fill_color"},"line_color":{"field":"line_color"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"8330f57f-dd70-45e8-b6b2-0766d9a0d10b","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"007cee34-05e3-4b2f-8a50-bcd81a6644b0","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"007cee34-05e3-4b2f-8a50-bcd81a6644b0","type":"BoxAnnotation"},"plot":{"id":"360bda9f-ce8e-4bc9-9d70-4b2d4d62a548","subtype":"Figure","type":"Plot"}},"id":"7029f9c0-e5d0-4f01-9533-2e71083aa80c","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"8f9e5ee8-934e-4e38-9652-cd736399516c","type":"ColumnDataSource"},"glyph":{"id":"8330f57f-dd70-45e8-b6b2-0766d9a0d10b","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"adec5ac2-9b4e-4f0d-8e4b-6484ac2a547a","type":"Circle"},"selection_glyph":null},"id":"e43842c6-8eb4-46e2-913f-03439f215e6d","type":"GlyphRenderer"},{"attributes":{"axis_label":"Petal Length","formatter":{"id":"f0f90e69-1599-406f-93c9-1681664c0833","type":"BasicTickFormatter"},"plot":{"id":"360bda9f-ce8e-4bc9-9d70-4b2d4d62a548","subtype":"Figure","type":"Plot"},"ticker":{"id":"da844bcb-1ece-4d66-82df-a170df97a9f2","type":"BasicTicker"}},"id":"f34a69b9-4704-4ba5-bd21-4d25995b8851","type":"LinearAxis"},{"attributes":{},"id":"f0f90e69-1599-406f-93c9-1681664c0833","type":"BasicTickFormatter"},{"attributes":{},"id":"363ac713-dde8-4dce-a41d-c1520d4d0899","type":"ToolEvents"},{"attributes":{},"id":"3320d8a3-ec64-4782-933c-d80e19564934","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"9c0151de-9804-4ff6-a597-9490d917165b","type":"DataRange1d"},{"attributes":{"plot":{"id":"360bda9f-ce8e-4bc9-9d70-4b2d4d62a548","subtype":"Figure","type":"Plot"}},"id":"5967b356-3200-40ed-8bb3-7a7ae1306486","type":"SaveTool"},{"attributes":{"axis_label":"Petal Width","formatter":{"id":"3320d8a3-ec64-4782-933c-d80e19564934","type":"BasicTickFormatter"},"plot":{"id":"360bda9f-ce8e-4bc9-9d70-4b2d4d62a548","subtype":"Figure","type":"Plot"},"ticker":{"id":"82a13177-3498-4102-b4bd-fa068f66108a","type":"BasicTicker"}},"id":"5bee5797-dc6d-4eb2-9331-ed456fb0d7c7","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"adec5ac2-9b4e-4f0d-8e4b-6484ac2a547a","type":"Circle"},{"attributes":{"plot":{"id":"360bda9f-ce8e-4bc9-9d70-4b2d4d62a548","subtype":"Figure","type":"Plot"}},"id":"26baba28-f9c3-478f-90a0-8aa06877952e","type":"HelpTool"}],"root_ids":["360bda9f-ce8e-4bc9-9d70-4b2d4d62a548"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"9145b94e-44f7-417f-af22-9b974ed82309","elementid":"5b4309f3-9c99-4dc8-8afd-910659b814f9","modelid":"360bda9f-ce8e-4bc9-9d70-4b2d4d62a548"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
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