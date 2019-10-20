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
      };var element = document.getElementById("0c516c87-b0d8-4a93-bad3-0d078aebd516");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '0c516c87-b0d8-4a93-bad3-0d078aebd516' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"3c15a6f9-7def-4b60-876d-c4089697d726":{"roots":{"references":[{"attributes":{"formatter":{"id":"53cfeb2b-cdd5-4f35-a32e-68157da5243d","type":"BasicTickFormatter"},"plot":{"id":"5c4b6b44-61f8-41bc-addd-a729c786a1ee","subtype":"Figure","type":"Plot"},"ticker":{"id":"f049baa8-6ab2-41fc-b8ae-de44911efccb","type":"BasicTicker"}},"id":"b0411993-ece8-4282-ac2b-1dd9dbb55c64","type":"LinearAxis"},{"attributes":{"num_minor_ticks":10},"id":"8505c774-0eb3-43e8-8798-9bdb7c1cb39f","type":"LogTicker"},{"attributes":{"below":[{"id":"b0411993-ece8-4282-ac2b-1dd9dbb55c64","type":"LinearAxis"}],"left":[{"id":"836c010e-5b8b-445f-96e5-fcad0a560548","type":"LogAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"b0411993-ece8-4282-ac2b-1dd9dbb55c64","type":"LinearAxis"},{"id":"4e10e041-c501-4877-b721-d486c3a45cd2","type":"Grid"},{"id":"836c010e-5b8b-445f-96e5-fcad0a560548","type":"LogAxis"},{"id":"90ea7472-fff2-40df-bbba-2fd34b1fa0f9","type":"Grid"},{"id":"9b7ede18-4e28-4c65-a33e-675fe7fb038e","type":"BoxAnnotation"},{"id":"3ddf82ba-0107-405a-b310-4540178d4340","type":"GlyphRenderer"},{"id":"829bcb93-b12b-4a5c-86b8-656a7b733d19","type":"GlyphRenderer"}],"title":{"id":"9cb4bbdc-ff4f-42a7-bd96-1357371bf6aa","type":"Title"},"tool_events":{"id":"0c79660b-63b2-4afb-b7d2-b5cd7213b2b8","type":"ToolEvents"},"toolbar":{"id":"10c6b7f2-723b-4220-b542-2b20246c8f41","type":"Toolbar"},"x_range":{"id":"04ccdba4-3e3e-495d-9e24-bff5912c0b4b","type":"DataRange1d"},"y_mapper_type":"log","y_range":{"id":"80cf6f99-d917-4de9-9d02-94f9beb85b68","type":"DataRange1d"}},"id":"5c4b6b44-61f8-41bc-addd-a729c786a1ee","subtype":"Figure","type":"Plot"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"b19c4b34-9527-46ec-b696-3d8be2b76ff3","type":"Line"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"41786772-eff6-452c-afb6-5aeee353d637","type":"PanTool"},{"id":"6a30bdcc-b1b6-4aee-9ce6-d41c84118481","type":"WheelZoomTool"},{"id":"5744fb9c-ae16-4442-805a-8d2c665708ba","type":"BoxZoomTool"},{"id":"0356fb66-c61b-482c-a707-74af47a3a39d","type":"SaveTool"},{"id":"1408ac68-e208-4462-b3f5-7834b5311823","type":"ResetTool"},{"id":"22d77a04-33ad-4989-ac0c-871091c11a6b","type":"HelpTool"}]},"id":"10c6b7f2-723b-4220-b542-2b20246c8f41","type":"Toolbar"},{"attributes":{"plot":{"id":"5c4b6b44-61f8-41bc-addd-a729c786a1ee","subtype":"Figure","type":"Plot"}},"id":"41786772-eff6-452c-afb6-5aeee353d637","type":"PanTool"},{"attributes":{"plot":{"id":"5c4b6b44-61f8-41bc-addd-a729c786a1ee","subtype":"Figure","type":"Plot"}},"id":"1408ac68-e208-4462-b3f5-7834b5311823","type":"ResetTool"},{"attributes":{"plot":{"id":"5c4b6b44-61f8-41bc-addd-a729c786a1ee","subtype":"Figure","type":"Plot"},"ticker":{"id":"f049baa8-6ab2-41fc-b8ae-de44911efccb","type":"BasicTicker"}},"id":"4e10e041-c501-4877-b721-d486c3a45cd2","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"9cb4bbdc-ff4f-42a7-bd96-1357371bf6aa","type":"Title"},{"attributes":{"formatter":{"id":"fd0fa0c8-8dd6-4515-a4ae-513de3b51694","type":"LogTickFormatter"},"plot":{"id":"5c4b6b44-61f8-41bc-addd-a729c786a1ee","subtype":"Figure","type":"Plot"},"ticker":{"id":"8505c774-0eb3-43e8-8798-9bdb7c1cb39f","type":"LogTicker"}},"id":"836c010e-5b8b-445f-96e5-fcad0a560548","type":"LogAxis"},{"attributes":{"data_source":{"id":"6d0652bd-e013-4883-a448-5b69156bee26","type":"ColumnDataSource"},"glyph":{"id":"b19c4b34-9527-46ec-b696-3d8be2b76ff3","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"ecba2774-3a0f-436a-aad7-d6e9f9b48238","type":"Line"},"selection_glyph":null},"id":"3ddf82ba-0107-405a-b310-4540178d4340","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"5c4b6b44-61f8-41bc-addd-a729c786a1ee","subtype":"Figure","type":"Plot"}},"id":"6a30bdcc-b1b6-4aee-9ce6-d41c84118481","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"feb3ca6b-d083-4965-9a16-6426a729fdef","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.2589254117941673,3.1622776601683795,10.0,31.622776601683793,100.0,316.22776601683796,1000.0]}},"id":"6d0652bd-e013-4883-a448-5b69156bee26","type":"ColumnDataSource"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"ecba2774-3a0f-436a-aad7-d6e9f9b48238","type":"Line"},{"attributes":{},"id":"f049baa8-6ab2-41fc-b8ae-de44911efccb","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"f96d270b-f1ad-4694-ae0b-0747a8aeb5fb","type":"Circle"},{"attributes":{"callback":null},"id":"80cf6f99-d917-4de9-9d02-94f9beb85b68","type":"DataRange1d"},{"attributes":{"data_source":{"id":"88c4cfc1-7787-48f0-80ab-db623b8a696c","type":"ColumnDataSource"},"glyph":{"id":"f96d270b-f1ad-4694-ae0b-0747a8aeb5fb","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"feb3ca6b-d083-4965-9a16-6426a729fdef","type":"Circle"},"selection_glyph":null},"id":"829bcb93-b12b-4a5c-86b8-656a7b733d19","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"04ccdba4-3e3e-495d-9e24-bff5912c0b4b","type":"DataRange1d"},{"attributes":{"overlay":{"id":"9b7ede18-4e28-4c65-a33e-675fe7fb038e","type":"BoxAnnotation"},"plot":{"id":"5c4b6b44-61f8-41bc-addd-a729c786a1ee","subtype":"Figure","type":"Plot"}},"id":"5744fb9c-ae16-4442-805a-8d2c665708ba","type":"BoxZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"5c4b6b44-61f8-41bc-addd-a729c786a1ee","subtype":"Figure","type":"Plot"},"ticker":{"id":"8505c774-0eb3-43e8-8798-9bdb7c1cb39f","type":"LogTicker"}},"id":"90ea7472-fff2-40df-bbba-2fd34b1fa0f9","type":"Grid"},{"attributes":{"plot":{"id":"5c4b6b44-61f8-41bc-addd-a729c786a1ee","subtype":"Figure","type":"Plot"}},"id":"0356fb66-c61b-482c-a707-74af47a3a39d","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"9b7ede18-4e28-4c65-a33e-675fe7fb038e","type":"BoxAnnotation"},{"attributes":{},"id":"53cfeb2b-cdd5-4f35-a32e-68157da5243d","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"5c4b6b44-61f8-41bc-addd-a729c786a1ee","subtype":"Figure","type":"Plot"}},"id":"22d77a04-33ad-4989-ac0c-871091c11a6b","type":"HelpTool"},{"attributes":{"ticker":null},"id":"fd0fa0c8-8dd6-4515-a4ae-513de3b51694","type":"LogTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.2589254117941673,3.1622776601683795,10.0,31.622776601683793,100.0,316.22776601683796,1000.0]}},"id":"88c4cfc1-7787-48f0-80ab-db623b8a696c","type":"ColumnDataSource"},{"attributes":{},"id":"0c79660b-63b2-4afb-b7d2-b5cd7213b2b8","type":"ToolEvents"}],"root_ids":["5c4b6b44-61f8-41bc-addd-a729c786a1ee"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"3c15a6f9-7def-4b60-876d-c4089697d726","elementid":"0c516c87-b0d8-4a93-bad3-0d078aebd516","modelid":"5c4b6b44-61f8-41bc-addd-a729c786a1ee"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
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
