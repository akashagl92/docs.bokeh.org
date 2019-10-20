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
      };var element = document.getElementById("1324c8c2-6163-400e-9f4a-8aca9630e4e3");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '1324c8c2-6163-400e-9f4a-8aca9630e4e3' but no matching script tag was found. ")
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
                var docs_json = {"e95aebb8-773f-4ade-9add-941878a833b4":{"roots":{"references":[{"attributes":{"callback":null},"id":"2bed25b7-7e55-4f38-9910-b6aa627879d9","type":"DataRange1d"},{"attributes":{},"id":"797d1b7a-0243-4363-8386-8d5253af23f6","type":"WheelZoomTool"},{"attributes":{},"id":"3c594f4b-50cf-460a-9c85-046a1fc8cced","type":"SaveTool"},{"attributes":{},"id":"f050bca2-3a5c-44cd-99d4-e755b10572e8","type":"HelpTool"},{"attributes":{"overlay":{"id":"7e7e1ba6-1852-4a86-9bfb-4c93fa0843e6","type":"BoxAnnotation"}},"id":"20e3822a-15a2-47c8-9c92-33df07b19dfe","type":"BoxZoomTool"},{"attributes":{"plot":null,"text":""},"id":"a3c47aa0-c63d-468c-a035-d7191d3bc6d4","type":"Title"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"0fc1a5cb-1bef-4bf4-bc90-4eeb0f4f9d77","type":"Circle"},{"attributes":{},"id":"e8c83446-b2eb-494a-abe1-62603fbed3be","type":"PanTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"eadfc7fb-fa3d-4b1b-af72-8c8e0f2863a3","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"eadfc7fb-fa3d-4b1b-af72-8c8e0f2863a3","type":"ColumnDataSource"},"glyph":{"id":"0fc1a5cb-1bef-4bf4-bc90-4eeb0f4f9d77","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"87867558-1ba8-42da-b131-369b9d5a1e53","type":"Circle"},"selection_glyph":null,"view":{"id":"3d4c8ac2-b6c6-4df7-91a3-983782f06f6c","type":"CDSView"}},"id":"914fd28b-a8bd-4b75-91ab-d09376e61b0d","type":"GlyphRenderer"},{"attributes":{"source":{"id":"eadfc7fb-fa3d-4b1b-af72-8c8e0f2863a3","type":"ColumnDataSource"}},"id":"3d4c8ac2-b6c6-4df7-91a3-983782f06f6c","type":"CDSView"},{"attributes":{},"id":"167ac70a-1709-4de4-bb18-04d21eaaeaec","type":"BasicTicker"},{"attributes":{"format":"0.0%"},"id":"5ea882fd-6af3-439e-9756-ff7e51829ae6","type":"NumeralTickFormatter"},{"attributes":{},"id":"50f38e7f-d490-4a92-bc0b-763601e7b378","type":"LinearScale"},{"attributes":{"format":"$0.00"},"id":"da11bba8-42f7-48e3-a803-7958d32251a3","type":"NumeralTickFormatter"},{"attributes":{"plot":{"id":"c4f70e9a-8c46-4211-9400-15aceb3887e0","subtype":"Figure","type":"Plot"},"ticker":{"id":"167ac70a-1709-4de4-bb18-04d21eaaeaec","type":"BasicTicker"}},"id":"519c0a9f-c4ff-441a-b48c-907a8ee066f9","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"7e7e1ba6-1852-4a86-9bfb-4c93fa0843e6","type":"BoxAnnotation"},{"attributes":{"dimension":1,"plot":{"id":"c4f70e9a-8c46-4211-9400-15aceb3887e0","subtype":"Figure","type":"Plot"},"ticker":{"id":"d026a293-cb3d-41b4-b120-a513d836d3db","type":"BasicTicker"}},"id":"fe2395d3-6a7f-4879-801d-fa0a9cd2bf6e","type":"Grid"},{"attributes":{"below":[{"id":"b2f64c5c-76a9-406a-960e-b71f0c9dcf54","type":"LinearAxis"}],"left":[{"id":"7ee53a3e-a49a-456b-b306-d7a7b0055c18","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"b2f64c5c-76a9-406a-960e-b71f0c9dcf54","type":"LinearAxis"},{"id":"519c0a9f-c4ff-441a-b48c-907a8ee066f9","type":"Grid"},{"id":"7ee53a3e-a49a-456b-b306-d7a7b0055c18","type":"LinearAxis"},{"id":"fe2395d3-6a7f-4879-801d-fa0a9cd2bf6e","type":"Grid"},{"id":"7e7e1ba6-1852-4a86-9bfb-4c93fa0843e6","type":"BoxAnnotation"},{"id":"914fd28b-a8bd-4b75-91ab-d09376e61b0d","type":"GlyphRenderer"}],"title":{"id":"a3c47aa0-c63d-468c-a035-d7191d3bc6d4","type":"Title"},"toolbar":{"id":"5e9c6d7d-fae8-4c2b-9930-9de124cb4d94","type":"Toolbar"},"x_range":{"id":"0b4cd0e9-5160-409b-8d9d-cb911b7593b4","type":"DataRange1d"},"x_scale":{"id":"50f38e7f-d490-4a92-bc0b-763601e7b378","type":"LinearScale"},"y_range":{"id":"2bed25b7-7e55-4f38-9910-b6aa627879d9","type":"DataRange1d"},"y_scale":{"id":"835e4da0-2abf-4704-88e7-dd0a1fc0728b","type":"LinearScale"}},"id":"c4f70e9a-8c46-4211-9400-15aceb3887e0","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"5ea882fd-6af3-439e-9756-ff7e51829ae6","type":"NumeralTickFormatter"},"plot":{"id":"c4f70e9a-8c46-4211-9400-15aceb3887e0","subtype":"Figure","type":"Plot"},"ticker":{"id":"167ac70a-1709-4de4-bb18-04d21eaaeaec","type":"BasicTicker"}},"id":"b2f64c5c-76a9-406a-960e-b71f0c9dcf54","type":"LinearAxis"},{"attributes":{},"id":"8113aef6-cd85-4a13-8320-07195afce4cb","type":"ResetTool"},{"attributes":{"formatter":{"id":"da11bba8-42f7-48e3-a803-7958d32251a3","type":"NumeralTickFormatter"},"plot":{"id":"c4f70e9a-8c46-4211-9400-15aceb3887e0","subtype":"Figure","type":"Plot"},"ticker":{"id":"d026a293-cb3d-41b4-b120-a513d836d3db","type":"BasicTicker"}},"id":"7ee53a3e-a49a-456b-b306-d7a7b0055c18","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"e8c83446-b2eb-494a-abe1-62603fbed3be","type":"PanTool"},{"id":"797d1b7a-0243-4363-8386-8d5253af23f6","type":"WheelZoomTool"},{"id":"20e3822a-15a2-47c8-9c92-33df07b19dfe","type":"BoxZoomTool"},{"id":"3c594f4b-50cf-460a-9c85-046a1fc8cced","type":"SaveTool"},{"id":"8113aef6-cd85-4a13-8320-07195afce4cb","type":"ResetTool"},{"id":"f050bca2-3a5c-44cd-99d4-e755b10572e8","type":"HelpTool"}]},"id":"5e9c6d7d-fae8-4c2b-9930-9de124cb4d94","type":"Toolbar"},{"attributes":{},"id":"835e4da0-2abf-4704-88e7-dd0a1fc0728b","type":"LinearScale"},{"attributes":{},"id":"d026a293-cb3d-41b4-b120-a513d836d3db","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"87867558-1ba8-42da-b131-369b9d5a1e53","type":"Circle"},{"attributes":{"callback":null},"id":"0b4cd0e9-5160-409b-8d9d-cb911b7593b4","type":"DataRange1d"}],"root_ids":["c4f70e9a-8c46-4211-9400-15aceb3887e0"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"e95aebb8-773f-4ade-9add-941878a833b4","elementid":"1324c8c2-6163-400e-9f4a-8aca9630e4e3","modelid":"c4f70e9a-8c46-4211-9400-15aceb3887e0"}];
                
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
