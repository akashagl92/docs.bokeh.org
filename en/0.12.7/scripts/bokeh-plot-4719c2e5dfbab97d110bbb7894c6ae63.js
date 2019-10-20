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
      };var element = document.getElementById("120d23c9-a7c5-4fbe-aefa-a6f53e700d3b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '120d23c9-a7c5-4fbe-aefa-a6f53e700d3b' but no matching script tag was found. ")
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
                var docs_json = {"7e2abab3-5a2b-4988-bf78-493b2e4ec5c6":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"6ccfb992-799a-440e-8663-b6745904f121","type":"PanTool"},{"id":"4b7fffe6-33c7-4c05-b3d8-9e015e336667","type":"WheelZoomTool"},{"id":"da67731c-070e-40ae-8d19-2f25267a64e0","type":"BoxZoomTool"},{"id":"30774352-683a-4b4e-bfa2-5c5aa60970b5","type":"SaveTool"},{"id":"37911505-18d3-44c6-95d8-db4d57baf709","type":"ResetTool"},{"id":"a34843c4-9e33-4851-919d-238444b40f47","type":"HelpTool"}]},"id":"4165eb7b-6c32-4a53-a281-a8e32e102c64","type":"Toolbar"},{"attributes":{},"id":"5cbafdd2-af1f-47ad-a100-3f2eb280c270","type":"BasicTicker"},{"attributes":{},"id":"a47796a8-6614-4f9e-9aab-94f0fd7491e0","type":"LinearScale"},{"attributes":{},"id":"f9442c58-b25d-46e1-a782-9d72b920eb9a","type":"BasicTicker"},{"attributes":{},"id":"967a6f84-05f3-4883-8063-900a0ac05a3a","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"0e98b3aa-46dd-486d-a31c-e0d26df0b999","type":"ColumnDataSource"},"glyph":{"id":"e1bc1cb6-03fe-492e-8641-78da780dd1f7","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d91b1ba3-8cd3-4aeb-8545-870c690b86cc","type":"Circle"},"selection_glyph":null,"view":{"id":"abde5a55-1bb7-4554-b7c6-5a5525583451","type":"CDSView"}},"id":"75d4b582-1763-4b94-8b0a-8398dfeece67","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"8cf9fe81-a92f-4e89-950c-85e0b8d0ac80","type":"BoxAnnotation"}},"id":"da67731c-070e-40ae-8d19-2f25267a64e0","type":"BoxZoomTool"},{"attributes":{},"id":"059c60f6-4d04-4e47-a00e-e6ad26afb875","type":"BasicTickFormatter"},{"attributes":{},"id":"37911505-18d3-44c6-95d8-db4d57baf709","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"d91b1ba3-8cd3-4aeb-8545-870c690b86cc","type":"Circle"},{"attributes":{},"id":"30774352-683a-4b4e-bfa2-5c5aa60970b5","type":"SaveTool"},{"attributes":{},"id":"4b7fffe6-33c7-4c05-b3d8-9e015e336667","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"0d4bdada-bc03-4a3e-8699-d97aa2f26794","type":"DataRange1d"},{"attributes":{"formatter":{"id":"967a6f84-05f3-4883-8063-900a0ac05a3a","type":"BasicTickFormatter"},"plot":{"id":"087f48b1-5725-43ef-b57c-3028b3c3a056","subtype":"Figure","type":"Plot"},"ticker":{"id":"5cbafdd2-af1f-47ad-a100-3f2eb280c270","type":"BasicTicker"}},"id":"ead93a1b-ca8a-4f73-876e-7e35e2864b22","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"087f48b1-5725-43ef-b57c-3028b3c3a056","subtype":"Figure","type":"Plot"},"ticker":{"id":"5cbafdd2-af1f-47ad-a100-3f2eb280c270","type":"BasicTicker"}},"id":"828e191a-190e-4ebf-b920-e0372f146b8f","type":"Grid"},{"attributes":{"formatter":{"id":"059c60f6-4d04-4e47-a00e-e6ad26afb875","type":"BasicTickFormatter"},"plot":{"id":"087f48b1-5725-43ef-b57c-3028b3c3a056","subtype":"Figure","type":"Plot"},"ticker":{"id":"f9442c58-b25d-46e1-a782-9d72b920eb9a","type":"BasicTicker"}},"id":"db037f46-51c6-4369-bc0a-7609aef98d9b","type":"LinearAxis"},{"attributes":{"plot":{"id":"087f48b1-5725-43ef-b57c-3028b3c3a056","subtype":"Figure","type":"Plot"},"ticker":{"id":"f9442c58-b25d-46e1-a782-9d72b920eb9a","type":"BasicTicker"}},"id":"32ebffeb-035d-459d-9784-e50a01989fc0","type":"Grid"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"0e98b3aa-46dd-486d-a31c-e0d26df0b999","type":"ColumnDataSource"},{"attributes":{},"id":"019bfb37-c2f6-4a7b-9a6f-be9a5640dfc0","type":"LinearScale"},{"attributes":{"source":{"id":"0e98b3aa-46dd-486d-a31c-e0d26df0b999","type":"ColumnDataSource"}},"id":"abde5a55-1bb7-4554-b7c6-5a5525583451","type":"CDSView"},{"attributes":{"callback":null},"id":"88ad2b89-9422-463f-90ad-57e1f56db145","type":"DataRange1d"},{"attributes":{},"id":"a34843c4-9e33-4851-919d-238444b40f47","type":"HelpTool"},{"attributes":{},"id":"6ccfb992-799a-440e-8663-b6745904f121","type":"PanTool"},{"attributes":{"below":[{"id":"db037f46-51c6-4369-bc0a-7609aef98d9b","type":"LinearAxis"}],"left":[{"id":"ead93a1b-ca8a-4f73-876e-7e35e2864b22","type":"LinearAxis"}],"plot_height":300,"plot_width":700,"renderers":[{"id":"db037f46-51c6-4369-bc0a-7609aef98d9b","type":"LinearAxis"},{"id":"32ebffeb-035d-459d-9784-e50a01989fc0","type":"Grid"},{"id":"ead93a1b-ca8a-4f73-876e-7e35e2864b22","type":"LinearAxis"},{"id":"828e191a-190e-4ebf-b920-e0372f146b8f","type":"Grid"},{"id":"8cf9fe81-a92f-4e89-950c-85e0b8d0ac80","type":"BoxAnnotation"},{"id":"75d4b582-1763-4b94-8b0a-8398dfeece67","type":"GlyphRenderer"}],"title":{"id":"4f3944d5-dbdc-4390-95af-65fb934b577d","type":"Title"},"toolbar":{"id":"4165eb7b-6c32-4a53-a281-a8e32e102c64","type":"Toolbar"},"x_range":{"id":"0d4bdada-bc03-4a3e-8699-d97aa2f26794","type":"DataRange1d"},"x_scale":{"id":"019bfb37-c2f6-4a7b-9a6f-be9a5640dfc0","type":"LinearScale"},"y_range":{"id":"88ad2b89-9422-463f-90ad-57e1f56db145","type":"DataRange1d"},"y_scale":{"id":"a47796a8-6614-4f9e-9aab-94f0fd7491e0","type":"LinearScale"}},"id":"087f48b1-5725-43ef-b57c-3028b3c3a056","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":""},"id":"4f3944d5-dbdc-4390-95af-65fb934b577d","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8cf9fe81-a92f-4e89-950c-85e0b8d0ac80","type":"BoxAnnotation"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"e1bc1cb6-03fe-492e-8641-78da780dd1f7","type":"Circle"}],"root_ids":["087f48b1-5725-43ef-b57c-3028b3c3a056"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"7e2abab3-5a2b-4988-bf78-493b2e4ec5c6","elementid":"120d23c9-a7c5-4fbe-aefa-a6f53e700d3b","modelid":"087f48b1-5725-43ef-b57c-3028b3c3a056"}];
                
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
