(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
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
      };var element = document.getElementById("a9fdec66-c695-4a21-95f8-0b46beec6ef6");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a9fdec66-c695-4a21-95f8-0b46beec6ef6' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.7.min.js"];
    
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
                var docs_json = {"236d16e5-d940-4511-9ed8-ea7d10bb8ea2":{"roots":{"references":[{"attributes":{"data_source":{"id":"c3701a27-737b-452e-a9d0-57ccf6c5fd61","type":"ColumnDataSource"},"glyph":{"id":"4b0b8d3d-3643-43d9-b6c0-fdc8ac864bb7","type":"Annulus"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9903a628-fc30-456f-a0a1-f75374aa5b28","type":"Annulus"},"selection_glyph":null,"view":{"id":"bb20739a-ccfe-4887-bdd6-8b40593c2510","type":"CDSView"}},"id":"e6f0b214-2cbc-48ef-8410-0e2a2584da46","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"c3701a27-737b-452e-a9d0-57ccf6c5fd61","type":"ColumnDataSource"},{"attributes":{},"id":"238b3cad-2d5d-4475-9858-f04309c99652","type":"LinearScale"},{"attributes":{},"id":"4ffeadc4-5a40-44ac-b395-e0dbb76d9515","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"6cc47f72-8c04-4189-93c3-0e1bbfa05f74","type":"BoxAnnotation"},{"attributes":{"fill_color":{"value":"#7FC97F"},"inner_radius":{"units":"data","value":0.2},"line_color":{"value":"#7FC97F"},"outer_radius":{"units":"data","value":0.5},"x":{"field":"x"},"y":{"field":"y"}},"id":"4b0b8d3d-3643-43d9-b6c0-fdc8ac864bb7","type":"Annulus"},{"attributes":{"callback":null},"id":"55c1fde0-b730-4ae4-9015-fa5e32940c53","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"units":"data","value":0.2},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"units":"data","value":0.5},"x":{"field":"x"},"y":{"field":"y"}},"id":"9903a628-fc30-456f-a0a1-f75374aa5b28","type":"Annulus"},{"attributes":{"plot":null,"text":""},"id":"2300d09d-c52a-4528-9604-5f7727b8e6f2","type":"Title"},{"attributes":{"source":{"id":"c3701a27-737b-452e-a9d0-57ccf6c5fd61","type":"ColumnDataSource"}},"id":"bb20739a-ccfe-4887-bdd6-8b40593c2510","type":"CDSView"},{"attributes":{},"id":"d1dc5ca3-ac45-4743-834d-4904d257b110","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"7dae314b-f55c-4425-a5f2-e2aeb9afde18","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"4ae77df8-c83e-4c1a-b8ea-d27de3b88415","subtype":"Figure","type":"Plot"},"ticker":{"id":"7b8517a2-0adf-4490-8c48-2b20d15aac1b","type":"BasicTicker"}},"id":"d72eb660-1052-41ba-9b04-8bd5afbd3d21","type":"Grid"},{"attributes":{},"id":"6fbc82b5-9745-4b7a-82ed-480e005c23d6","type":"PanTool"},{"attributes":{"plot":{"id":"4ae77df8-c83e-4c1a-b8ea-d27de3b88415","subtype":"Figure","type":"Plot"},"ticker":{"id":"3e773e65-1609-4f5e-96ad-467c20279ceb","type":"BasicTicker"}},"id":"0b2b40fd-2621-446a-97a8-98cb4bab4f85","type":"Grid"},{"attributes":{},"id":"0df088c5-dfce-4ee4-abcf-1fa12d36742e","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"d1dc5ca3-ac45-4743-834d-4904d257b110","type":"BasicTickFormatter"},"plot":{"id":"4ae77df8-c83e-4c1a-b8ea-d27de3b88415","subtype":"Figure","type":"Plot"},"ticker":{"id":"7b8517a2-0adf-4490-8c48-2b20d15aac1b","type":"BasicTicker"}},"id":"fc89234f-c44a-41e5-b09f-4625d6dedbc8","type":"LinearAxis"},{"attributes":{},"id":"c3b1ca94-5e95-4be1-8fe8-9be5d57914cb","type":"LinearScale"},{"attributes":{},"id":"c4aa3c5c-eceb-4439-b8b1-6adec2412320","type":"SaveTool"},{"attributes":{"overlay":{"id":"6cc47f72-8c04-4189-93c3-0e1bbfa05f74","type":"BoxAnnotation"}},"id":"a74d9907-a00c-4b03-9535-4be9e5a64815","type":"BoxZoomTool"},{"attributes":{},"id":"3e773e65-1609-4f5e-96ad-467c20279ceb","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"6fbc82b5-9745-4b7a-82ed-480e005c23d6","type":"PanTool"},{"id":"0df088c5-dfce-4ee4-abcf-1fa12d36742e","type":"WheelZoomTool"},{"id":"a74d9907-a00c-4b03-9535-4be9e5a64815","type":"BoxZoomTool"},{"id":"c4aa3c5c-eceb-4439-b8b1-6adec2412320","type":"SaveTool"},{"id":"79c9b652-d12c-4833-95b1-e3017202c4a6","type":"ResetTool"},{"id":"9d9a433d-e064-43b8-ac32-30a768022d17","type":"HelpTool"}]},"id":"872c05b8-7abc-4abe-9c66-29d6433c62bf","type":"Toolbar"},{"attributes":{},"id":"79c9b652-d12c-4833-95b1-e3017202c4a6","type":"ResetTool"},{"attributes":{"formatter":{"id":"4ffeadc4-5a40-44ac-b395-e0dbb76d9515","type":"BasicTickFormatter"},"plot":{"id":"4ae77df8-c83e-4c1a-b8ea-d27de3b88415","subtype":"Figure","type":"Plot"},"ticker":{"id":"3e773e65-1609-4f5e-96ad-467c20279ceb","type":"BasicTicker"}},"id":"d0902a2e-33ca-46fd-9de2-f10502b96a6b","type":"LinearAxis"},{"attributes":{},"id":"7b8517a2-0adf-4490-8c48-2b20d15aac1b","type":"BasicTicker"},{"attributes":{"below":[{"id":"d0902a2e-33ca-46fd-9de2-f10502b96a6b","type":"LinearAxis"}],"left":[{"id":"fc89234f-c44a-41e5-b09f-4625d6dedbc8","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"d0902a2e-33ca-46fd-9de2-f10502b96a6b","type":"LinearAxis"},{"id":"0b2b40fd-2621-446a-97a8-98cb4bab4f85","type":"Grid"},{"id":"fc89234f-c44a-41e5-b09f-4625d6dedbc8","type":"LinearAxis"},{"id":"d72eb660-1052-41ba-9b04-8bd5afbd3d21","type":"Grid"},{"id":"6cc47f72-8c04-4189-93c3-0e1bbfa05f74","type":"BoxAnnotation"},{"id":"e6f0b214-2cbc-48ef-8410-0e2a2584da46","type":"GlyphRenderer"}],"title":{"id":"2300d09d-c52a-4528-9604-5f7727b8e6f2","type":"Title"},"toolbar":{"id":"872c05b8-7abc-4abe-9c66-29d6433c62bf","type":"Toolbar"},"x_range":{"id":"7dae314b-f55c-4425-a5f2-e2aeb9afde18","type":"DataRange1d"},"x_scale":{"id":"238b3cad-2d5d-4475-9858-f04309c99652","type":"LinearScale"},"y_range":{"id":"55c1fde0-b730-4ae4-9015-fa5e32940c53","type":"DataRange1d"},"y_scale":{"id":"c3b1ca94-5e95-4be1-8fe8-9be5d57914cb","type":"LinearScale"}},"id":"4ae77df8-c83e-4c1a-b8ea-d27de3b88415","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"9d9a433d-e064-43b8-ac32-30a768022d17","type":"HelpTool"}],"root_ids":["4ae77df8-c83e-4c1a-b8ea-d27de3b88415"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"236d16e5-d940-4511-9ed8-ea7d10bb8ea2","elementid":"a9fdec66-c695-4a21-95f8-0b46beec6ef6","modelid":"4ae77df8-c83e-4c1a-b8ea-d27de3b88415"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
