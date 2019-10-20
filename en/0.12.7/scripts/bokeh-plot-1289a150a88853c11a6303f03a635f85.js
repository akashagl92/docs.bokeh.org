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
      };var element = document.getElementById("dbb2f596-106e-4be1-b967-913fe90672b1");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'dbb2f596-106e-4be1-b967-913fe90672b1' but no matching script tag was found. ")
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
                var docs_json = {"fdeafaf1-18b1-4861-ab38-6d2efeeadecd":{"roots":{"references":[{"attributes":{},"id":"ba43c317-4cd3-4ed5-be57-a9572cdf94ee","type":"HelpTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"d7a0a362-2413-448f-8322-fa6f93b920dd","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"6b2ea0ee-cf6d-4830-b814-df267f8cd5b5","type":"PanTool"},{"id":"62c5592a-2602-4b79-84bb-baed598b0be5","type":"WheelZoomTool"},{"id":"cdfc4aca-a3be-4a00-8a02-d773dc7c4a09","type":"BoxZoomTool"},{"id":"7131ad17-9450-4aee-a693-641cc9082f0a","type":"SaveTool"},{"id":"55d7803f-8e3f-41e1-bbbb-789744ae7106","type":"ResetTool"},{"id":"ba43c317-4cd3-4ed5-be57-a9572cdf94ee","type":"HelpTool"}]},"id":"8fb67175-7740-41b9-a604-78f0c6d033b3","type":"Toolbar"},{"attributes":{},"id":"7131ad17-9450-4aee-a693-641cc9082f0a","type":"SaveTool"},{"attributes":{},"id":"62c5592a-2602-4b79-84bb-baed598b0be5","type":"WheelZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"322903ab-198d-49ff-b283-6443590a714c","subtype":"Figure","type":"Plot"},"ticker":{"id":"6b409348-a0ee-454f-8aed-2ff314dc6296","type":"BasicTicker"}},"id":"961ef00e-fd95-4301-91af-7a87fba3a337","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"b9ee73b1-1294-4431-b713-3ea5ce9bad75","type":"Circle"},{"attributes":{},"id":"55d7803f-8e3f-41e1-bbbb-789744ae7106","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"5ce54ad4-f6e5-4ca2-baa0-9040172ad97f","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"322903ab-198d-49ff-b283-6443590a714c","subtype":"Figure","type":"Plot"},"ticker":{"id":"ed37cf57-d530-456c-88fe-6a964c535e1c","type":"BasicTicker"}},"id":"4a174681-d77f-4327-afed-d5023b7d8f20","type":"Grid"},{"attributes":{},"id":"c5b11c54-d4e1-4a18-9c83-6c2354fe0148","type":"BasicTickFormatter"},{"attributes":{},"id":"bd475d42-196c-4701-875c-ac530311ec60","type":"LinearScale"},{"attributes":{},"id":"6b409348-a0ee-454f-8aed-2ff314dc6296","type":"BasicTicker"},{"attributes":{"data_source":{"id":"f07d16b1-53c1-4a46-be6b-aad9502c76ba","type":"ColumnDataSource"},"glyph":{"id":"d7a0a362-2413-448f-8322-fa6f93b920dd","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b9ee73b1-1294-4431-b713-3ea5ce9bad75","type":"Circle"},"selection_glyph":null,"view":{"id":"43d7c4d2-7eb4-4336-9ee4-541249628645","type":"CDSView"}},"id":"b7ffec24-d2d8-4333-929f-a39c4d7176bc","type":"GlyphRenderer"},{"attributes":{"source":{"id":"f07d16b1-53c1-4a46-be6b-aad9502c76ba","type":"ColumnDataSource"}},"id":"43d7c4d2-7eb4-4336-9ee4-541249628645","type":"CDSView"},{"attributes":{},"id":"54011e1b-7fd0-4c47-a748-14fce3267e87","type":"BasicTickFormatter"},{"attributes":{},"id":"ed37cf57-d530-456c-88fe-6a964c535e1c","type":"BasicTicker"},{"attributes":{"callback":null},"id":"1a1b40ef-9878-4096-8b8e-e8c71e79ea98","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2],"y":[3,4]}},"id":"f07d16b1-53c1-4a46-be6b-aad9502c76ba","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"1b2a3e3c-e25f-40dd-810a-fd7d5cba762d","type":"LinearAxis"}],"left":[{"id":"b7108c3f-4b93-44c3-a065-589a17140182","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"1b2a3e3c-e25f-40dd-810a-fd7d5cba762d","type":"LinearAxis"},{"id":"4a174681-d77f-4327-afed-d5023b7d8f20","type":"Grid"},{"id":"b7108c3f-4b93-44c3-a065-589a17140182","type":"LinearAxis"},{"id":"961ef00e-fd95-4301-91af-7a87fba3a337","type":"Grid"},{"id":"5ce54ad4-f6e5-4ca2-baa0-9040172ad97f","type":"BoxAnnotation"},{"id":"b7ffec24-d2d8-4333-929f-a39c4d7176bc","type":"GlyphRenderer"}],"title":{"id":"669ea5fe-b3f7-4d99-908b-94aab9dc6b92","type":"Title"},"toolbar":{"id":"8fb67175-7740-41b9-a604-78f0c6d033b3","type":"Toolbar"},"x_range":{"id":"f6ef372b-c407-49d1-981e-dd94f1fa7deb","type":"DataRange1d"},"x_scale":{"id":"25cbd918-35b8-4f3e-bfb7-f06f1b6be1d8","type":"LinearScale"},"y_range":{"id":"1a1b40ef-9878-4096-8b8e-e8c71e79ea98","type":"DataRange1d"},"y_scale":{"id":"bd475d42-196c-4701-875c-ac530311ec60","type":"LinearScale"}},"id":"322903ab-198d-49ff-b283-6443590a714c","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"54011e1b-7fd0-4c47-a748-14fce3267e87","type":"BasicTickFormatter"},"plot":{"id":"322903ab-198d-49ff-b283-6443590a714c","subtype":"Figure","type":"Plot"},"ticker":{"id":"6b409348-a0ee-454f-8aed-2ff314dc6296","type":"BasicTicker"}},"id":"b7108c3f-4b93-44c3-a065-589a17140182","type":"LinearAxis"},{"attributes":{"formatter":{"id":"c5b11c54-d4e1-4a18-9c83-6c2354fe0148","type":"BasicTickFormatter"},"plot":{"id":"322903ab-198d-49ff-b283-6443590a714c","subtype":"Figure","type":"Plot"},"ticker":{"id":"ed37cf57-d530-456c-88fe-6a964c535e1c","type":"BasicTicker"}},"id":"1b2a3e3c-e25f-40dd-810a-fd7d5cba762d","type":"LinearAxis"},{"attributes":{"align":"right","background_fill_color":{"value":"#aaaaee"},"plot":null,"text":"Title With Options","text_color":{"value":"orange"},"text_font_size":{"value":"25px"}},"id":"669ea5fe-b3f7-4d99-908b-94aab9dc6b92","type":"Title"},{"attributes":{"callback":null},"id":"f6ef372b-c407-49d1-981e-dd94f1fa7deb","type":"DataRange1d"},{"attributes":{},"id":"6b2ea0ee-cf6d-4830-b814-df267f8cd5b5","type":"PanTool"},{"attributes":{},"id":"25cbd918-35b8-4f3e-bfb7-f06f1b6be1d8","type":"LinearScale"},{"attributes":{"overlay":{"id":"5ce54ad4-f6e5-4ca2-baa0-9040172ad97f","type":"BoxAnnotation"}},"id":"cdfc4aca-a3be-4a00-8a02-d773dc7c4a09","type":"BoxZoomTool"}],"root_ids":["322903ab-198d-49ff-b283-6443590a714c"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"fdeafaf1-18b1-4861-ab38-6d2efeeadecd","elementid":"dbb2f596-106e-4be1-b967-913fe90672b1","modelid":"322903ab-198d-49ff-b283-6443590a714c"}];
                
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
