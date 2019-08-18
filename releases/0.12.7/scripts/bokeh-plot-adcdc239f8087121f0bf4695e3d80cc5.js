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
      };var element = document.getElementById("50e6a65c-6b3d-44b6-a244-3344c7f2e46d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '50e6a65c-6b3d-44b6-a244-3344c7f2e46d' but no matching script tag was found. ")
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
                var docs_json = {"35091c55-192b-481c-be89-d76d2d68f27a":{"roots":{"references":[{"attributes":{"end":{"id":"45d31ddf-a005-4279-9b50-731f1388da5d","type":"OpenHead"},"plot":{"id":"abded144-85d2-4935-8fc0-b07cc3fb4670","subtype":"Figure","type":"Plot"},"source":null,"start":null,"x_end":{"value":1},"x_start":{"value":0},"y_end":{"value":0},"y_start":{"value":0}},"id":"29960d40-53a4-42cb-bf14-4a9984b48384","type":"Arrow"},{"attributes":{"end":{"id":"9e37659c-450c-4c1f-82e1-07856545d136","type":"NormalHead"},"plot":{"id":"abded144-85d2-4935-8fc0-b07cc3fb4670","subtype":"Figure","type":"Plot"},"source":null,"start":null,"x_end":{"value":0.5},"x_start":{"value":1},"y_end":{"value":0.7},"y_start":{"value":0}},"id":"fbc9a3ab-ab7e-4558-b687-3fbb5f1b3d92","type":"Arrow"},{"attributes":{"data_source":{"id":"725a0ee3-56f5-4631-8c95-1f8e036b4050","type":"ColumnDataSource"},"glyph":{"id":"a0892b31-a7f5-4195-b7d1-3c29b9bdcdc1","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3e320b50-d294-4e1d-a8a9-f23402ee4c95","type":"Circle"},"selection_glyph":null,"view":{"id":"82e3a2b1-92c4-4462-b1fb-71fa66e77b83","type":"CDSView"}},"id":"09139af7-41fc-483b-b9ac-fc5295f65ccc","type":"GlyphRenderer"},{"attributes":{"line_color":{"value":"firebrick"},"line_width":{"value":4},"plot":null},"id":"45d31ddf-a005-4279-9b50-731f1388da5d","type":"OpenHead"},{"attributes":{"fill_color":{"value":"orange"},"plot":null},"id":"9e37659c-450c-4c1f-82e1-07856545d136","type":"NormalHead"},{"attributes":{},"id":"d7687192-da47-4896-9607-4dfe56fe45fc","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"a35983b0-e34e-4b20-adbb-371a78dc78ab","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"e3f932ad-0507-435a-a2fa-4fe67a56f709","type":"LinearAxis"}],"left":[{"id":"800778a8-d100-4952-bfc2-494ef4b683b3","type":"LinearAxis"}],"renderers":[{"id":"e3f932ad-0507-435a-a2fa-4fe67a56f709","type":"LinearAxis"},{"id":"bab9eaec-83d7-4fe1-8a0f-1213896dc670","type":"Grid"},{"id":"800778a8-d100-4952-bfc2-494ef4b683b3","type":"LinearAxis"},{"id":"2b8442bf-4fcb-4bdd-b160-78bde575370f","type":"Grid"},{"id":"a35983b0-e34e-4b20-adbb-371a78dc78ab","type":"BoxAnnotation"},{"id":"09139af7-41fc-483b-b9ac-fc5295f65ccc","type":"GlyphRenderer"},{"id":"29960d40-53a4-42cb-bf14-4a9984b48384","type":"Arrow"},{"id":"fbc9a3ab-ab7e-4558-b687-3fbb5f1b3d92","type":"Arrow"},{"id":"6dfb67c9-d88b-4e36-9aa2-442d31d707ca","type":"Arrow"}],"title":{"id":"315243ac-0f8c-458b-bcae-fa788b3789da","type":"Title"},"toolbar":{"id":"7d7914dc-c873-49eb-b266-2b7f9343bd04","type":"Toolbar"},"x_range":{"id":"b221e713-58ad-4728-ba82-5913bdea9bef","type":"DataRange1d"},"x_scale":{"id":"23b49457-b232-4e41-85cf-4a003e20e4b2","type":"LinearScale"},"y_range":{"id":"b3609c38-a376-4c6e-b8a3-30b6abc459f9","type":"DataRange1d"},"y_scale":{"id":"5db13e0c-3e37-4ad6-86fe-cf8fc4f520b4","type":"LinearScale"}},"id":"abded144-85d2-4935-8fc0-b07cc3fb4670","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.1},"x":{"field":"x"},"y":{"field":"y"}},"id":"3e320b50-d294-4e1d-a8a9-f23402ee4c95","type":"Circle"},{"attributes":{"source":{"id":"725a0ee3-56f5-4631-8c95-1f8e036b4050","type":"ColumnDataSource"}},"id":"82e3a2b1-92c4-4462-b1fb-71fa66e77b83","type":"CDSView"},{"attributes":{"plot":null,"text":""},"id":"315243ac-0f8c-458b-bcae-fa788b3789da","type":"Title"},{"attributes":{},"id":"b5c17755-e41c-40d5-8436-6cf1051f3e56","type":"HelpTool"},{"attributes":{},"id":"14e85c08-3f7e-4c8a-9a82-c125d6552fa2","type":"ResetTool"},{"attributes":{},"id":"ac9e1392-5b24-4494-b3c6-d8b448451ac3","type":"SaveTool"},{"attributes":{"overlay":{"id":"a35983b0-e34e-4b20-adbb-371a78dc78ab","type":"BoxAnnotation"}},"id":"b56f242e-3022-4c40-9975-c578ba417637","type":"BoxZoomTool"},{"attributes":{},"id":"c13d05c3-debf-4945-8bc6-78b8d1c86e6a","type":"WheelZoomTool"},{"attributes":{},"id":"a562b8a5-d794-4c8f-b19e-e0b7c10eb605","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"b221e713-58ad-4728-ba82-5913bdea9bef","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"fill_color"},"line_color":{"field":"line_color"},"radius":{"units":"data","value":0.1},"x":{"field":"x"},"y":{"field":"y"}},"id":"a0892b31-a7f5-4195-b7d1-3c29b9bdcdc1","type":"Circle"},{"attributes":{"plot":{"id":"abded144-85d2-4935-8fc0-b07cc3fb4670","subtype":"Figure","type":"Plot"},"ticker":{"id":"c3c9852c-0731-458f-871e-9f3706eabd66","type":"BasicTicker"}},"id":"bab9eaec-83d7-4fe1-8a0f-1213896dc670","type":"Grid"},{"attributes":{},"id":"5db13e0c-3e37-4ad6-86fe-cf8fc4f520b4","type":"LinearScale"},{"attributes":{"callback":null},"id":"b3609c38-a376-4c6e-b8a3-30b6abc459f9","type":"DataRange1d"},{"attributes":{},"id":"23b49457-b232-4e41-85cf-4a003e20e4b2","type":"LinearScale"},{"attributes":{"formatter":{"id":"0ed92f37-50fe-4a30-a8cc-1b91b968b4d8","type":"BasicTickFormatter"},"plot":{"id":"abded144-85d2-4935-8fc0-b07cc3fb4670","subtype":"Figure","type":"Plot"},"ticker":{"id":"c3c9852c-0731-458f-871e-9f3706eabd66","type":"BasicTicker"}},"id":"e3f932ad-0507-435a-a2fa-4fe67a56f709","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","y","fill_color","line_color"],"data":{"fill_color":["navy","yellow","red"],"line_color":["navy","yellow","red"],"x":[0,1,0.5],"y":[0,0,0.7]}},"id":"725a0ee3-56f5-4631-8c95-1f8e036b4050","type":"ColumnDataSource"},{"attributes":{},"id":"c3c9852c-0731-458f-871e-9f3706eabd66","type":"BasicTicker"},{"attributes":{},"id":"0ed92f37-50fe-4a30-a8cc-1b91b968b4d8","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"a562b8a5-d794-4c8f-b19e-e0b7c10eb605","type":"BasicTickFormatter"},"plot":{"id":"abded144-85d2-4935-8fc0-b07cc3fb4670","subtype":"Figure","type":"Plot"},"ticker":{"id":"9516e0bb-d462-4526-90a2-9c37ef3571ed","type":"BasicTicker"}},"id":"800778a8-d100-4952-bfc2-494ef4b683b3","type":"LinearAxis"},{"attributes":{"end":{"id":"02e18acc-15a8-48f5-bfdf-d0a73485e609","type":"VeeHead"},"line_color":{"value":"red"},"plot":{"id":"abded144-85d2-4935-8fc0-b07cc3fb4670","subtype":"Figure","type":"Plot"},"source":null,"start":null,"x_end":{"value":0},"x_start":{"value":0.5},"y_end":{"value":0},"y_start":{"value":0.7}},"id":"6dfb67c9-d88b-4e36-9aa2-442d31d707ca","type":"Arrow"},{"attributes":{},"id":"9516e0bb-d462-4526-90a2-9c37ef3571ed","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"d7687192-da47-4896-9607-4dfe56fe45fc","type":"PanTool"},{"id":"c13d05c3-debf-4945-8bc6-78b8d1c86e6a","type":"WheelZoomTool"},{"id":"b56f242e-3022-4c40-9975-c578ba417637","type":"BoxZoomTool"},{"id":"ac9e1392-5b24-4494-b3c6-d8b448451ac3","type":"SaveTool"},{"id":"14e85c08-3f7e-4c8a-9a82-c125d6552fa2","type":"ResetTool"},{"id":"b5c17755-e41c-40d5-8436-6cf1051f3e56","type":"HelpTool"}]},"id":"7d7914dc-c873-49eb-b266-2b7f9343bd04","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"abded144-85d2-4935-8fc0-b07cc3fb4670","subtype":"Figure","type":"Plot"},"ticker":{"id":"9516e0bb-d462-4526-90a2-9c37ef3571ed","type":"BasicTicker"}},"id":"2b8442bf-4fcb-4bdd-b160-78bde575370f","type":"Grid"},{"attributes":{"plot":null,"size":35},"id":"02e18acc-15a8-48f5-bfdf-d0a73485e609","type":"VeeHead"}],"root_ids":["abded144-85d2-4935-8fc0-b07cc3fb4670"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"35091c55-192b-481c-be89-d76d2d68f27a","elementid":"50e6a65c-6b3d-44b6-a244-3344c7f2e46d","modelid":"abded144-85d2-4935-8fc0-b07cc3fb4670"}];
                
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
