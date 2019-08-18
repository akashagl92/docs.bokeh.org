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
      };var element = document.getElementById("c6dc255a-6c20-4543-84a1-a9e64ba8a41c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c6dc255a-6c20-4543-84a1-a9e64ba8a41c' but no matching script tag was found. ")
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
                var docs_json = {"a2e91d38-c3a5-4491-8ebf-b42e14bbf368":{"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"e46f60ff-4f9b-4d06-bc5e-cb5607239152","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"f112e0c2-3676-4ba8-805d-de308206df48","type":"BasicTickFormatter"},"plot":{"id":"4bd6d463-2a94-4bd3-bcc3-331cb09b5396","subtype":"Figure","type":"Plot"},"ticker":{"id":"f9cf0170-22be-433a-b28d-163025a5f77a","type":"BasicTicker"}},"id":"0ca8bb6b-8b42-463d-a900-1f1f14f0b006","type":"LinearAxis"},{"attributes":{},"id":"c64ed7f4-ffab-4247-9807-d190c36a9ae7","type":"ToolEvents"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"74022432-d25c-4100-9c42-528b3a7b9eb2","type":"Circle"},{"attributes":{"plot":{"id":"4bd6d463-2a94-4bd3-bcc3-331cb09b5396","subtype":"Figure","type":"Plot"}},"id":"5078c612-d082-4a4d-952e-02185e73f5e8","type":"PanTool"},{"attributes":{"plot":{"id":"4bd6d463-2a94-4bd3-bcc3-331cb09b5396","subtype":"Figure","type":"Plot"}},"id":"8aac24e9-a633-4b5e-a5de-41952e5c1785","type":"WheelZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"4bd6d463-2a94-4bd3-bcc3-331cb09b5396","subtype":"Figure","type":"Plot"},"ticker":{"id":"f9cf0170-22be-433a-b28d-163025a5f77a","type":"BasicTicker"}},"id":"4117d55d-4ed7-4f3b-b3e1-da113f953763","type":"Grid"},{"attributes":{"callback":null},"id":"abe978bf-ba24-4cd2-b839-f048eb450a94","type":"DataRange1d"},{"attributes":{},"id":"bb0a5a7a-df40-4940-b4b1-82c435ed2cf6","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"5a36fac2-fc29-45e4-a173-56a1da3156e0","type":"DataRange1d"},{"attributes":{},"id":"f9cf0170-22be-433a-b28d-163025a5f77a","type":"BasicTicker"},{"attributes":{"plot":{"id":"4bd6d463-2a94-4bd3-bcc3-331cb09b5396","subtype":"Figure","type":"Plot"},"ticker":{"id":"4772f661-6a2b-445b-90f6-128e0c719815","type":"BasicTicker"}},"id":"c304987f-bc89-4fcb-bc83-6e13b47ec433","type":"Grid"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"7f0398b1-2dd1-4d84-bef1-86b6131994c2","type":"Circle"},{"attributes":{"below":[{"id":"4689042e-44a6-4572-8c69-2345f65c2376","type":"LinearAxis"},{"id":"989793f4-27db-4bdc-9137-bdd142225ae0","type":"Title"}],"left":[{"id":"0ca8bb6b-8b42-463d-a900-1f1f14f0b006","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"4689042e-44a6-4572-8c69-2345f65c2376","type":"LinearAxis"},{"id":"c304987f-bc89-4fcb-bc83-6e13b47ec433","type":"Grid"},{"id":"0ca8bb6b-8b42-463d-a900-1f1f14f0b006","type":"LinearAxis"},{"id":"4117d55d-4ed7-4f3b-b3e1-da113f953763","type":"Grid"},{"id":"e46f60ff-4f9b-4d06-bc5e-cb5607239152","type":"BoxAnnotation"},{"id":"c94321d1-4af2-4ace-a677-0ae51c2390b9","type":"GlyphRenderer"},{"id":"989793f4-27db-4bdc-9137-bdd142225ae0","type":"Title"}],"title":{"id":"2a85ff3f-933b-49f1-9396-697f68d736f2","type":"Title"},"title_location":"left","tool_events":{"id":"c64ed7f4-ffab-4247-9807-d190c36a9ae7","type":"ToolEvents"},"toolbar":{"id":"d9a37c4d-edd4-4781-b935-891d89e6188e","type":"Toolbar"},"x_range":{"id":"5a36fac2-fc29-45e4-a173-56a1da3156e0","type":"DataRange1d"},"y_range":{"id":"abe978bf-ba24-4cd2-b839-f048eb450a94","type":"DataRange1d"}},"id":"4bd6d463-2a94-4bd3-bcc3-331cb09b5396","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"5078c612-d082-4a4d-952e-02185e73f5e8","type":"PanTool"},{"id":"8aac24e9-a633-4b5e-a5de-41952e5c1785","type":"WheelZoomTool"},{"id":"26d0c340-e5dd-4e07-8e90-6200fb6c9daa","type":"BoxZoomTool"},{"id":"c71d9415-5e31-4c35-90e6-9565004929a2","type":"SaveTool"},{"id":"bc436f08-bd49-4d71-b42d-4ebd0160cfce","type":"ResetTool"},{"id":"1c0922ba-3d26-40fc-a65a-b61b2def844e","type":"HelpTool"}]},"id":"d9a37c4d-edd4-4781-b935-891d89e6188e","type":"Toolbar"},{"attributes":{"align":"center","plot":{"id":"4bd6d463-2a94-4bd3-bcc3-331cb09b5396","subtype":"Figure","type":"Plot"},"text":"Bottom Centered Title"},"id":"989793f4-27db-4bdc-9137-bdd142225ae0","type":"Title"},{"attributes":{"plot":{"id":"4bd6d463-2a94-4bd3-bcc3-331cb09b5396","subtype":"Figure","type":"Plot"}},"id":"c71d9415-5e31-4c35-90e6-9565004929a2","type":"SaveTool"},{"attributes":{"plot":null,"text":"Left Title"},"id":"2a85ff3f-933b-49f1-9396-697f68d736f2","type":"Title"},{"attributes":{"overlay":{"id":"e46f60ff-4f9b-4d06-bc5e-cb5607239152","type":"BoxAnnotation"},"plot":{"id":"4bd6d463-2a94-4bd3-bcc3-331cb09b5396","subtype":"Figure","type":"Plot"}},"id":"26d0c340-e5dd-4e07-8e90-6200fb6c9daa","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2],"y":[3,4]}},"id":"848bf948-af47-4a79-9d28-2917d2a13049","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"4bd6d463-2a94-4bd3-bcc3-331cb09b5396","subtype":"Figure","type":"Plot"}},"id":"1c0922ba-3d26-40fc-a65a-b61b2def844e","type":"HelpTool"},{"attributes":{"plot":{"id":"4bd6d463-2a94-4bd3-bcc3-331cb09b5396","subtype":"Figure","type":"Plot"}},"id":"bc436f08-bd49-4d71-b42d-4ebd0160cfce","type":"ResetTool"},{"attributes":{"data_source":{"id":"848bf948-af47-4a79-9d28-2917d2a13049","type":"ColumnDataSource"},"glyph":{"id":"7f0398b1-2dd1-4d84-bef1-86b6131994c2","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"74022432-d25c-4100-9c42-528b3a7b9eb2","type":"Circle"},"selection_glyph":null},"id":"c94321d1-4af2-4ace-a677-0ae51c2390b9","type":"GlyphRenderer"},{"attributes":{},"id":"f112e0c2-3676-4ba8-805d-de308206df48","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"bb0a5a7a-df40-4940-b4b1-82c435ed2cf6","type":"BasicTickFormatter"},"plot":{"id":"4bd6d463-2a94-4bd3-bcc3-331cb09b5396","subtype":"Figure","type":"Plot"},"ticker":{"id":"4772f661-6a2b-445b-90f6-128e0c719815","type":"BasicTicker"}},"id":"4689042e-44a6-4572-8c69-2345f65c2376","type":"LinearAxis"},{"attributes":{},"id":"4772f661-6a2b-445b-90f6-128e0c719815","type":"BasicTicker"}],"root_ids":["4bd6d463-2a94-4bd3-bcc3-331cb09b5396"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"a2e91d38-c3a5-4491-8ebf-b42e14bbf368","elementid":"c6dc255a-6c20-4543-84a1-a9e64ba8a41c","modelid":"4bd6d463-2a94-4bd3-bcc3-331cb09b5396"}];
                
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
