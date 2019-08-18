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
      };var element = document.getElementById("116bf204-2b6e-4bdd-bc53-e20b417d77af");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '116bf204-2b6e-4bdd-bc53-e20b417d77af' but no matching script tag was found. ")
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
                var docs_json = {"fdc84111-44fc-485f-a583-8dca7faf9a3a":{"roots":{"references":[{"attributes":{},"id":"c8511237-e30c-415a-988d-ed5e6a0f8e21","type":"BasicTicker"},{"attributes":{"formatter":{"id":"6194675f-96e8-4a0e-966c-a48d84916dce","type":"NumeralTickFormatter"},"plot":{"id":"eff1cf38-8015-4a76-b325-8a90b1ce23c7","subtype":"Figure","type":"Plot"},"ticker":{"id":"4e0492c9-4018-4222-82a6-26a12378ab6c","type":"BasicTicker"}},"id":"4d5cd531-ad6c-4fab-8263-dfd93e2cbbaa","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"579fb862-3dcc-424a-92f5-7c910686d58e","type":"Circle"},{"attributes":{"plot":{"id":"eff1cf38-8015-4a76-b325-8a90b1ce23c7","subtype":"Figure","type":"Plot"}},"id":"eb92123a-0f4d-4ff4-ad25-df3d8057d564","type":"PanTool"},{"attributes":{"below":[{"id":"2e5fa223-aeaa-4a35-b4e2-f69f07e3a58e","type":"LinearAxis"}],"left":[{"id":"4d5cd531-ad6c-4fab-8263-dfd93e2cbbaa","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"2e5fa223-aeaa-4a35-b4e2-f69f07e3a58e","type":"LinearAxis"},{"id":"fa14c440-3b40-40da-bc25-7cf3d04e275d","type":"Grid"},{"id":"4d5cd531-ad6c-4fab-8263-dfd93e2cbbaa","type":"LinearAxis"},{"id":"d499b9c6-9a56-4fb4-9a53-a2af03dbd9b9","type":"Grid"},{"id":"7112e2c3-8ade-4809-8d04-108d267a8ed0","type":"BoxAnnotation"},{"id":"e5cb7847-f216-4cb1-957e-14ece615acba","type":"GlyphRenderer"}],"title":{"id":"49c67275-7a7b-43e4-a119-6dc873982c08","type":"Title"},"tool_events":{"id":"fda55896-f9cc-4394-921e-3e4db311d54e","type":"ToolEvents"},"toolbar":{"id":"1d193d98-e6cf-4f5d-bbda-60964010d9b6","type":"Toolbar"},"x_range":{"id":"3b763b2b-0dd5-4c99-ae62-ba89e8a66845","type":"DataRange1d"},"y_range":{"id":"7c327719-cd6e-4525-8dd8-4215e3cfce90","type":"DataRange1d"}},"id":"eff1cf38-8015-4a76-b325-8a90b1ce23c7","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"eff1cf38-8015-4a76-b325-8a90b1ce23c7","subtype":"Figure","type":"Plot"}},"id":"ac462609-4df1-45c6-83d0-8fbac1b5731d","type":"ResetTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"4f877662-3e8e-4e42-9176-7c6542df692a","type":"Circle"},{"attributes":{"formatter":{"id":"28719b55-8b35-49da-bf76-8942fd7a603d","type":"NumeralTickFormatter"},"plot":{"id":"eff1cf38-8015-4a76-b325-8a90b1ce23c7","subtype":"Figure","type":"Plot"},"ticker":{"id":"c8511237-e30c-415a-988d-ed5e6a0f8e21","type":"BasicTicker"}},"id":"2e5fa223-aeaa-4a35-b4e2-f69f07e3a58e","type":"LinearAxis"},{"attributes":{},"id":"fda55896-f9cc-4394-921e-3e4db311d54e","type":"ToolEvents"},{"attributes":{"plot":{"id":"eff1cf38-8015-4a76-b325-8a90b1ce23c7","subtype":"Figure","type":"Plot"}},"id":"a956cbe4-225a-4e30-82d6-40507eef23f8","type":"SaveTool"},{"attributes":{"plot":{"id":"eff1cf38-8015-4a76-b325-8a90b1ce23c7","subtype":"Figure","type":"Plot"},"ticker":{"id":"c8511237-e30c-415a-988d-ed5e6a0f8e21","type":"BasicTicker"}},"id":"fa14c440-3b40-40da-bc25-7cf3d04e275d","type":"Grid"},{"attributes":{},"id":"4e0492c9-4018-4222-82a6-26a12378ab6c","type":"BasicTicker"},{"attributes":{"callback":null},"id":"7c327719-cd6e-4525-8dd8-4215e3cfce90","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"7112e2c3-8ade-4809-8d04-108d267a8ed0","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"3b763b2b-0dd5-4c99-ae62-ba89e8a66845","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"eff1cf38-8015-4a76-b325-8a90b1ce23c7","subtype":"Figure","type":"Plot"},"ticker":{"id":"4e0492c9-4018-4222-82a6-26a12378ab6c","type":"BasicTicker"}},"id":"d499b9c6-9a56-4fb4-9a53-a2af03dbd9b9","type":"Grid"},{"attributes":{"overlay":{"id":"7112e2c3-8ade-4809-8d04-108d267a8ed0","type":"BoxAnnotation"},"plot":{"id":"eff1cf38-8015-4a76-b325-8a90b1ce23c7","subtype":"Figure","type":"Plot"}},"id":"6e3f1552-0323-4cb5-bda2-c781c6f1434b","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"eff1cf38-8015-4a76-b325-8a90b1ce23c7","subtype":"Figure","type":"Plot"}},"id":"19aadfad-c4ee-466f-a69e-bfe4cf576809","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"79b2ea7c-efd6-4fdd-bffc-11c9a513afca","type":"ColumnDataSource"},"glyph":{"id":"4f877662-3e8e-4e42-9176-7c6542df692a","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"579fb862-3dcc-424a-92f5-7c910686d58e","type":"Circle"},"selection_glyph":null},"id":"e5cb7847-f216-4cb1-957e-14ece615acba","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"79b2ea7c-efd6-4fdd-bffc-11c9a513afca","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":""},"id":"49c67275-7a7b-43e4-a119-6dc873982c08","type":"Title"},{"attributes":{"plot":{"id":"eff1cf38-8015-4a76-b325-8a90b1ce23c7","subtype":"Figure","type":"Plot"}},"id":"23e29084-9c4d-4138-8eaa-44839ca5fd76","type":"HelpTool"},{"attributes":{"format":"0.0%"},"id":"28719b55-8b35-49da-bf76-8942fd7a603d","type":"NumeralTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"eb92123a-0f4d-4ff4-ad25-df3d8057d564","type":"PanTool"},{"id":"19aadfad-c4ee-466f-a69e-bfe4cf576809","type":"WheelZoomTool"},{"id":"6e3f1552-0323-4cb5-bda2-c781c6f1434b","type":"BoxZoomTool"},{"id":"a956cbe4-225a-4e30-82d6-40507eef23f8","type":"SaveTool"},{"id":"ac462609-4df1-45c6-83d0-8fbac1b5731d","type":"ResetTool"},{"id":"23e29084-9c4d-4138-8eaa-44839ca5fd76","type":"HelpTool"}]},"id":"1d193d98-e6cf-4f5d-bbda-60964010d9b6","type":"Toolbar"},{"attributes":{"format":"$0.00"},"id":"6194675f-96e8-4a0e-966c-a48d84916dce","type":"NumeralTickFormatter"}],"root_ids":["eff1cf38-8015-4a76-b325-8a90b1ce23c7"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"fdc84111-44fc-485f-a583-8dca7faf9a3a","elementid":"116bf204-2b6e-4bdd-bc53-e20b417d77af","modelid":"eff1cf38-8015-4a76-b325-8a90b1ce23c7"}];
                
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
