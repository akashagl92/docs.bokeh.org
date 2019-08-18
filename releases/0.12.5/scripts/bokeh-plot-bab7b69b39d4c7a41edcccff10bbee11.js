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
      };var element = document.getElementById("2cebbf1a-5211-4474-8b4d-457397037d4e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2cebbf1a-5211-4474-8b4d-457397037d4e' but no matching script tag was found. ")
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
                var docs_json = {"42c7d8ff-8517-4ba1-9a06-0d6fee074735":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"4ea79184-964c-41e9-a4b7-247bebc8fc0e","type":"PanTool"},{"id":"79efaa2e-45c2-46be-8444-d29305070394","type":"WheelZoomTool"},{"id":"10623878-f416-4281-95de-33882f492fb6","type":"BoxZoomTool"},{"id":"a006e103-ffbd-45a9-b889-87b2648146b8","type":"SaveTool"},{"id":"5112e6ed-0266-4047-a5fc-a58fa5ef857b","type":"ResetTool"},{"id":"e30d7731-f1f4-4d0a-bfd5-cfbdaa02a405","type":"HelpTool"}]},"id":"04424090-ee8b-4873-afdf-fb3713b22b10","type":"Toolbar"},{"attributes":{"formatter":{"id":"0d7be007-d608-4248-b4ac-14fbe2d44d17","type":"BasicTickFormatter"},"plot":{"id":"92e73ae4-653a-47e2-a7a2-4e22870913b0","subtype":"Figure","type":"Plot"},"ticker":{"id":"5a9cded9-70e8-4671-8414-06ee3443485c","type":"BasicTicker"}},"id":"759cd47a-0949-4c6e-8877-46fabbad9bea","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"92e73ae4-653a-47e2-a7a2-4e22870913b0","subtype":"Figure","type":"Plot"},"ticker":{"id":"5a9cded9-70e8-4671-8414-06ee3443485c","type":"BasicTicker"}},"id":"f2490ae7-c336-4a74-a55f-d51331ee4c37","type":"Grid"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"c568fc0d-f17a-4afd-bb16-f3584911813e","type":"ColumnDataSource"},{"attributes":{},"id":"95cba5d7-a6c9-4f29-bde6-f324d28df1c4","type":"BasicTicker"},{"attributes":{"plot":null,"text":""},"id":"2220b0f5-da65-45de-8171-2814fae1e48b","type":"Title"},{"attributes":{},"id":"5a9cded9-70e8-4671-8414-06ee3443485c","type":"BasicTicker"},{"attributes":{"direction":"clock","end_angle":{"units":"rad","value":4.8},"fill_alpha":{"value":0.6},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.6},"line_color":{"value":"firebrick"},"radius":{"units":"data","value":0.2},"start_angle":{"units":"rad","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"d6379fab-89de-4991-ba9a-a8f7bde9c0de","type":"Wedge"},{"attributes":{"plot":{"id":"92e73ae4-653a-47e2-a7a2-4e22870913b0","subtype":"Figure","type":"Plot"}},"id":"5112e6ed-0266-4047-a5fc-a58fa5ef857b","type":"ResetTool"},{"attributes":{"overlay":{"id":"3667c42f-06e4-4009-94b9-dab1bd3d1e60","type":"BoxAnnotation"},"plot":{"id":"92e73ae4-653a-47e2-a7a2-4e22870913b0","subtype":"Figure","type":"Plot"}},"id":"10623878-f416-4281-95de-33882f492fb6","type":"BoxZoomTool"},{"attributes":{"direction":"clock","end_angle":{"units":"rad","value":4.8},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.2},"start_angle":{"units":"rad","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"6f4bc8b6-eec2-433d-baa7-a4d696d77179","type":"Wedge"},{"attributes":{"below":[{"id":"00e3985c-1f1a-438e-baeb-d3ad0b640d22","type":"LinearAxis"}],"left":[{"id":"759cd47a-0949-4c6e-8877-46fabbad9bea","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"00e3985c-1f1a-438e-baeb-d3ad0b640d22","type":"LinearAxis"},{"id":"aa024d62-fc75-4cdd-a853-40454e106b8d","type":"Grid"},{"id":"759cd47a-0949-4c6e-8877-46fabbad9bea","type":"LinearAxis"},{"id":"f2490ae7-c336-4a74-a55f-d51331ee4c37","type":"Grid"},{"id":"3667c42f-06e4-4009-94b9-dab1bd3d1e60","type":"BoxAnnotation"},{"id":"d81d7b48-5664-4167-9350-7a27b5acf687","type":"GlyphRenderer"}],"title":{"id":"2220b0f5-da65-45de-8171-2814fae1e48b","type":"Title"},"tool_events":{"id":"8f199f3d-94f6-4f57-94b5-73920d07d068","type":"ToolEvents"},"toolbar":{"id":"04424090-ee8b-4873-afdf-fb3713b22b10","type":"Toolbar"},"x_range":{"id":"e5f633a2-aa36-4daf-b1bb-ee00c57433b1","type":"DataRange1d"},"y_range":{"id":"ceb60c3b-23c9-4981-b43b-3c4da987404c","type":"DataRange1d"}},"id":"92e73ae4-653a-47e2-a7a2-4e22870913b0","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"92e73ae4-653a-47e2-a7a2-4e22870913b0","subtype":"Figure","type":"Plot"},"ticker":{"id":"95cba5d7-a6c9-4f29-bde6-f324d28df1c4","type":"BasicTicker"}},"id":"aa024d62-fc75-4cdd-a853-40454e106b8d","type":"Grid"},{"attributes":{},"id":"8f199f3d-94f6-4f57-94b5-73920d07d068","type":"ToolEvents"},{"attributes":{"plot":{"id":"92e73ae4-653a-47e2-a7a2-4e22870913b0","subtype":"Figure","type":"Plot"}},"id":"a006e103-ffbd-45a9-b889-87b2648146b8","type":"SaveTool"},{"attributes":{},"id":"0d7be007-d608-4248-b4ac-14fbe2d44d17","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"3667c42f-06e4-4009-94b9-dab1bd3d1e60","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"92e73ae4-653a-47e2-a7a2-4e22870913b0","subtype":"Figure","type":"Plot"}},"id":"79efaa2e-45c2-46be-8444-d29305070394","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"e5f633a2-aa36-4daf-b1bb-ee00c57433b1","type":"DataRange1d"},{"attributes":{"plot":{"id":"92e73ae4-653a-47e2-a7a2-4e22870913b0","subtype":"Figure","type":"Plot"}},"id":"e30d7731-f1f4-4d0a-bfd5-cfbdaa02a405","type":"HelpTool"},{"attributes":{"formatter":{"id":"16359060-02ac-4a63-a654-8ff7dc8e9e0d","type":"BasicTickFormatter"},"plot":{"id":"92e73ae4-653a-47e2-a7a2-4e22870913b0","subtype":"Figure","type":"Plot"},"ticker":{"id":"95cba5d7-a6c9-4f29-bde6-f324d28df1c4","type":"BasicTicker"}},"id":"00e3985c-1f1a-438e-baeb-d3ad0b640d22","type":"LinearAxis"},{"attributes":{"data_source":{"id":"c568fc0d-f17a-4afd-bb16-f3584911813e","type":"ColumnDataSource"},"glyph":{"id":"d6379fab-89de-4991-ba9a-a8f7bde9c0de","type":"Wedge"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6f4bc8b6-eec2-433d-baa7-a4d696d77179","type":"Wedge"},"selection_glyph":null},"id":"d81d7b48-5664-4167-9350-7a27b5acf687","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"92e73ae4-653a-47e2-a7a2-4e22870913b0","subtype":"Figure","type":"Plot"}},"id":"4ea79184-964c-41e9-a4b7-247bebc8fc0e","type":"PanTool"},{"attributes":{"callback":null},"id":"ceb60c3b-23c9-4981-b43b-3c4da987404c","type":"DataRange1d"},{"attributes":{},"id":"16359060-02ac-4a63-a654-8ff7dc8e9e0d","type":"BasicTickFormatter"}],"root_ids":["92e73ae4-653a-47e2-a7a2-4e22870913b0"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"42c7d8ff-8517-4ba1-9a06-0d6fee074735","elementid":"2cebbf1a-5211-4474-8b4d-457397037d4e","modelid":"92e73ae4-653a-47e2-a7a2-4e22870913b0"}];
                
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
