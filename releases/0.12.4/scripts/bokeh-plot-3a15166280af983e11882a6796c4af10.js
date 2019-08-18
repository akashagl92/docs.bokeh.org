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
      };var element = document.getElementById("83a1ff63-8687-47ac-8e45-0541fe39af7d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '83a1ff63-8687-47ac-8e45-0541fe39af7d' but no matching script tag was found. ")
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
                var docs_json = {"e2b0c43f-af27-49d2-a8c5-72c833278baa":{"roots":{"references":[{"attributes":{"data_source":{"id":"6e63f76f-91b2-4c5e-9896-d67bef152b18","type":"ColumnDataSource"},"glyph":{"id":"004c8297-7d2b-4a68-a77e-e2b68fe6fe4e","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"35f21fa3-9092-4c04-a7cb-2cd1e225e493","type":"Circle"},"selection_glyph":null},"id":"4799e4b9-53ce-4bb6-8888-111755537206","type":"GlyphRenderer"},{"attributes":{},"id":"1a81349a-1861-44b5-99af-bdb8eb8fd7ad","type":"ToolEvents"},{"attributes":{"formatter":{"id":"bfedc6bd-cacb-438f-a210-4800834883c5","type":"BasicTickFormatter"},"plot":{"id":"1967b215-3523-42e3-986a-3fade26e7802","subtype":"Figure","type":"Plot"},"ticker":{"id":"1fdda03c-5456-4a5a-84c6-50b5db155dfd","type":"BasicTicker"}},"id":"8eb130f4-73b8-475b-bea6-77e6b43c5c2c","type":"LinearAxis"},{"attributes":{"plot":{"id":"1967b215-3523-42e3-986a-3fade26e7802","subtype":"Figure","type":"Plot"}},"id":"3e23408f-5dcc-44c9-85b8-aa97ecde89e7","type":"SaveTool"},{"attributes":{},"id":"f2bc992b-ec95-4d46-9307-9441b9473d65","type":"BasicTicker"},{"attributes":{"plot":{"id":"1967b215-3523-42e3-986a-3fade26e7802","subtype":"Figure","type":"Plot"},"ticker":{"id":"f2bc992b-ec95-4d46-9307-9441b9473d65","type":"BasicTicker"}},"id":"64208d77-4259-4f03-9f5f-f6cb547ad118","type":"Grid"},{"attributes":{"below":[{"id":"35aaccf0-6e74-4d9e-a76e-df123cdf10da","type":"LinearAxis"}],"border_fill_color":{"value":"whitesmoke"},"left":[{"id":"8eb130f4-73b8-475b-bea6-77e6b43c5c2c","type":"LinearAxis"}],"min_border_left":80,"plot_height":400,"plot_width":400,"renderers":[{"id":"35aaccf0-6e74-4d9e-a76e-df123cdf10da","type":"LinearAxis"},{"id":"64208d77-4259-4f03-9f5f-f6cb547ad118","type":"Grid"},{"id":"8eb130f4-73b8-475b-bea6-77e6b43c5c2c","type":"LinearAxis"},{"id":"fb50d991-1335-42ea-bf10-7172581ba698","type":"Grid"},{"id":"591d1833-e073-409a-99d9-1ec8ed17106c","type":"BoxAnnotation"},{"id":"4799e4b9-53ce-4bb6-8888-111755537206","type":"GlyphRenderer"}],"title":{"id":"0fa7bf28-bf8c-483c-acfb-b4a69079c2e2","type":"Title"},"tool_events":{"id":"1a81349a-1861-44b5-99af-bdb8eb8fd7ad","type":"ToolEvents"},"toolbar":{"id":"a634467e-c8e8-4288-a4fb-de3fa1cef7ba","type":"Toolbar"},"x_range":{"id":"a4470ec3-2a90-42b7-bb13-7913da14ce0f","type":"DataRange1d"},"y_range":{"id":"067cd2f8-6a25-4d49-af03-a0c7a5b28006","type":"DataRange1d"}},"id":"1967b215-3523-42e3-986a-3fade26e7802","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"591d1833-e073-409a-99d9-1ec8ed17106c","type":"BoxAnnotation"},"plot":{"id":"1967b215-3523-42e3-986a-3fade26e7802","subtype":"Figure","type":"Plot"}},"id":"7e9ee47a-3e2b-49b3-879e-3ae2f75fb4ae","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"1967b215-3523-42e3-986a-3fade26e7802","subtype":"Figure","type":"Plot"}},"id":"e9ca33d6-6b88-4811-9a7e-874913da35a7","type":"ResetTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"6e63f76f-91b2-4c5e-9896-d67bef152b18","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":""},"id":"0fa7bf28-bf8c-483c-acfb-b4a69079c2e2","type":"Title"},{"attributes":{"plot":{"id":"1967b215-3523-42e3-986a-3fade26e7802","subtype":"Figure","type":"Plot"}},"id":"a186d8a7-8bf5-41ad-a709-35a182bd8be5","type":"HelpTool"},{"attributes":{},"id":"9f365afe-b7b8-42b1-8de0-adac9fb99e9f","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"a4470ec3-2a90-42b7-bb13-7913da14ce0f","type":"DataRange1d"},{"attributes":{},"id":"bfedc6bd-cacb-438f-a210-4800834883c5","type":"BasicTickFormatter"},{"attributes":{},"id":"1fdda03c-5456-4a5a-84c6-50b5db155dfd","type":"BasicTicker"},{"attributes":{"plot":{"id":"1967b215-3523-42e3-986a-3fade26e7802","subtype":"Figure","type":"Plot"}},"id":"92332da3-c8de-465f-91a1-cc4f63759c6a","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"9f365afe-b7b8-42b1-8de0-adac9fb99e9f","type":"BasicTickFormatter"},"plot":{"id":"1967b215-3523-42e3-986a-3fade26e7802","subtype":"Figure","type":"Plot"},"ticker":{"id":"f2bc992b-ec95-4d46-9307-9441b9473d65","type":"BasicTicker"}},"id":"35aaccf0-6e74-4d9e-a76e-df123cdf10da","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"35f21fa3-9092-4c04-a7cb-2cd1e225e493","type":"Circle"},{"attributes":{"callback":null},"id":"067cd2f8-6a25-4d49-af03-a0c7a5b28006","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"004c8297-7d2b-4a68-a77e-e2b68fe6fe4e","type":"Circle"},{"attributes":{"plot":{"id":"1967b215-3523-42e3-986a-3fade26e7802","subtype":"Figure","type":"Plot"}},"id":"bb5bce97-4ca6-4383-ac8d-0ec2af97c73e","type":"PanTool"},{"attributes":{"dimension":1,"plot":{"id":"1967b215-3523-42e3-986a-3fade26e7802","subtype":"Figure","type":"Plot"},"ticker":{"id":"1fdda03c-5456-4a5a-84c6-50b5db155dfd","type":"BasicTicker"}},"id":"fb50d991-1335-42ea-bf10-7172581ba698","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"591d1833-e073-409a-99d9-1ec8ed17106c","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"bb5bce97-4ca6-4383-ac8d-0ec2af97c73e","type":"PanTool"},{"id":"92332da3-c8de-465f-91a1-cc4f63759c6a","type":"WheelZoomTool"},{"id":"7e9ee47a-3e2b-49b3-879e-3ae2f75fb4ae","type":"BoxZoomTool"},{"id":"3e23408f-5dcc-44c9-85b8-aa97ecde89e7","type":"SaveTool"},{"id":"e9ca33d6-6b88-4811-9a7e-874913da35a7","type":"ResetTool"},{"id":"a186d8a7-8bf5-41ad-a709-35a182bd8be5","type":"HelpTool"}]},"id":"a634467e-c8e8-4288-a4fb-de3fa1cef7ba","type":"Toolbar"}],"root_ids":["1967b215-3523-42e3-986a-3fade26e7802"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"e2b0c43f-af27-49d2-a8c5-72c833278baa","elementid":"83a1ff63-8687-47ac-8e45-0541fe39af7d","modelid":"1967b215-3523-42e3-986a-3fade26e7802"}];
                
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
