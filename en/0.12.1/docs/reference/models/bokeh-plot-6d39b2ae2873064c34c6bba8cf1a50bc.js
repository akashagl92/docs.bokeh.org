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
      };var element = document.getElementById("6476ce59-9cb8-43f7-9571-1d0095716868");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '6476ce59-9cb8-43f7-9571-1d0095716868' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"46c34f31-9d4f-42a1-b899-ef4c64def472":{"roots":{"references":[{"attributes":{},"id":"690e3d63-46fb-465c-be46-7ff759aef210","type":"ToolEvents"},{"attributes":{"callback":null},"id":"7d1bdb5c-dc0e-4ebd-b78d-7ee10544f21d","type":"DataRange1d"},{"attributes":{"callback":null},"id":"8b427fe9-7240-46bb-be3a-6b0abb30e86a","type":"DataRange1d"},{"attributes":{"end_angle":{"units":"rad","value":4.1},"fill_color":{"value":"#8888ee"},"inner_radius":{"units":"data","value":0.2},"outer_radius":{"field":"r","units":"data"},"start_angle":{"units":"rad","value":0.6},"x":{"field":"x"},"y":{"field":"y"}},"id":"a29348ad-f266-46ba-9c60-0fec77762311","type":"AnnularWedge"},{"attributes":{"callback":null,"column_names":["y","x","r"],"data":{"r":[0.23333333333333336,0.275,0.3166666666666667,0.35833333333333334,0.4,0.4416666666666667,0.48333333333333334,0.525,0.5666666666666667],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"b7b507ff-5a1e-4b7b-a39a-edc072755ee9","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"e6920d1b-e1cd-4921-bcfa-bb12192346fa","type":"Plot"},"ticker":{"id":"c556e4a7-7f66-4b81-8217-d6ac961a3a60","type":"BasicTicker"}},"id":"e4f4c33c-becf-4cf2-a8aa-4fbfeb76b4ca","type":"Grid"},{"attributes":{},"id":"fb64f071-5c0f-4b64-9b15-af0aa93d76b9","type":"BasicTicker"},{"attributes":{"formatter":{"id":"3469ff93-de75-4da1-8293-dd914b41f2d0","type":"BasicTickFormatter"},"plot":{"id":"e6920d1b-e1cd-4921-bcfa-bb12192346fa","type":"Plot"},"ticker":{"id":"fb64f071-5c0f-4b64-9b15-af0aa93d76b9","type":"BasicTicker"}},"id":"260325bf-5436-4b05-9cb2-725b8df20652","type":"LinearAxis"},{"attributes":{},"id":"058ec59b-53ae-444f-af8b-da3e5fd077f4","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"260325bf-5436-4b05-9cb2-725b8df20652","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"88e62686-6729-45bc-b854-c53873867e01","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"2b3aa9c9-6a5a-42c9-a715-c59a49cf9dfb","type":"GlyphRenderer"},{"id":"260325bf-5436-4b05-9cb2-725b8df20652","type":"LinearAxis"},{"id":"88e62686-6729-45bc-b854-c53873867e01","type":"LinearAxis"},{"id":"22158ca0-7b31-451d-82ff-9d8715702052","type":"Grid"},{"id":"e4f4c33c-becf-4cf2-a8aa-4fbfeb76b4ca","type":"Grid"}],"title":null,"tool_events":{"id":"690e3d63-46fb-465c-be46-7ff759aef210","type":"ToolEvents"},"toolbar":{"id":"d3232de2-ceb7-4029-9590-db2dea6f3534","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"7d1bdb5c-dc0e-4ebd-b78d-7ee10544f21d","type":"DataRange1d"},"y_range":{"id":"8b427fe9-7240-46bb-be3a-6b0abb30e86a","type":"DataRange1d"}},"id":"e6920d1b-e1cd-4921-bcfa-bb12192346fa","type":"Plot"},{"attributes":{"formatter":{"id":"058ec59b-53ae-444f-af8b-da3e5fd077f4","type":"BasicTickFormatter"},"plot":{"id":"e6920d1b-e1cd-4921-bcfa-bb12192346fa","type":"Plot"},"ticker":{"id":"c556e4a7-7f66-4b81-8217-d6ac961a3a60","type":"BasicTicker"}},"id":"88e62686-6729-45bc-b854-c53873867e01","type":"LinearAxis"},{"attributes":{},"id":"c556e4a7-7f66-4b81-8217-d6ac961a3a60","type":"BasicTicker"},{"attributes":{},"id":"3469ff93-de75-4da1-8293-dd914b41f2d0","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"d3232de2-ceb7-4029-9590-db2dea6f3534","type":"Toolbar"},{"attributes":{"data_source":{"id":"b7b507ff-5a1e-4b7b-a39a-edc072755ee9","type":"ColumnDataSource"},"glyph":{"id":"a29348ad-f266-46ba-9c60-0fec77762311","type":"AnnularWedge"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"2b3aa9c9-6a5a-42c9-a715-c59a49cf9dfb","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"e6920d1b-e1cd-4921-bcfa-bb12192346fa","type":"Plot"},"ticker":{"id":"fb64f071-5c0f-4b64-9b15-af0aa93d76b9","type":"BasicTicker"}},"id":"22158ca0-7b31-451d-82ff-9d8715702052","type":"Grid"}],"root_ids":["e6920d1b-e1cd-4921-bcfa-bb12192346fa"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"46c34f31-9d4f-42a1-b899-ef4c64def472","elementid":"6476ce59-9cb8-43f7-9571-1d0095716868","modelid":"e6920d1b-e1cd-4921-bcfa-bb12192346fa"}];
              
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