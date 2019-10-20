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
      };var element = document.getElementById("3b99e9da-d325-4d0e-aaf2-1bfb972b53cf");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '3b99e9da-d325-4d0e-aaf2-1bfb972b53cf' but no matching script tag was found. ")
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
                var docs_json = {"c8f7f4e9-2a18-4d46-9c41-25e406db8880":{"roots":{"references":[{"attributes":{"data_source":{"id":"1b3a5fd8-d086-4838-b0b3-92d00ccb39d0","type":"ColumnDataSource"},"glyph":{"id":"eac21ee3-f317-49d6-a6fc-52135ebe564f","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"cdf8d838-3441-43dd-94f7-228158d10eda","type":"Circle"},"selection_glyph":null},"id":"81f0718e-d1e0-4848-a017-d4225b799b92","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"2e49564b-c70b-481e-b6a1-ec604799fdfe","subtype":"Figure","type":"Plot"}},"id":"8327c742-49c9-4e57-a3e2-02c20f048f1a","type":"ResetTool"},{"attributes":{},"id":"67dfb6d1-d853-447a-823f-6b2bc350d931","type":"BasicTicker"},{"attributes":{"below":[{"id":"2427c630-ab47-4d7e-be8f-bc55e5c96bf3","type":"LinearAxis"}],"left":[{"id":"48ec4a6e-fd92-43b3-99cf-bdc7b0ca87ba","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"2427c630-ab47-4d7e-be8f-bc55e5c96bf3","type":"LinearAxis"},{"id":"a437319a-8748-41aa-b819-fc5cc72929ce","type":"Grid"},{"id":"48ec4a6e-fd92-43b3-99cf-bdc7b0ca87ba","type":"LinearAxis"},{"id":"da9ae763-1b3f-4b7e-9175-7f86359b926a","type":"Grid"},{"id":"81f0718e-d1e0-4848-a017-d4225b799b92","type":"GlyphRenderer"}],"title":{"id":"e06a083e-c81f-4c15-9eef-5698bc4a63e8","type":"Title"},"tool_events":{"id":"01bbe4c2-b8f3-460d-8f8b-bb294ffcce93","type":"ToolEvents"},"toolbar":{"id":"228a1fdc-d940-43a6-997d-202290c0035b","type":"Toolbar"},"x_range":{"id":"f4599007-ed16-410d-965f-cb873ba8ca51","type":"DataRange1d"},"y_range":{"id":"8ac97196-0f44-40ea-a345-ec37a4f80eea","type":"DataRange1d"}},"id":"2e49564b-c70b-481e-b6a1-ec604799fdfe","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"2e49564b-c70b-481e-b6a1-ec604799fdfe","subtype":"Figure","type":"Plot"}},"id":"3b4793eb-0e3a-45fe-a330-8a5efe1dfd1b","type":"SaveTool"},{"attributes":{},"id":"01bbe4c2-b8f3-460d-8f8b-bb294ffcce93","type":"ToolEvents"},{"attributes":{"dimension":1,"plot":{"id":"2e49564b-c70b-481e-b6a1-ec604799fdfe","subtype":"Figure","type":"Plot"},"ticker":{"id":"1467ff87-12cf-4fca-92f2-6b45f040b3eb","type":"BasicTicker"}},"id":"da9ae763-1b3f-4b7e-9175-7f86359b926a","type":"Grid"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"49d4573b-6858-4a8d-b275-b6869d3da1d4","type":"PanTool"},{"id":"8327c742-49c9-4e57-a3e2-02c20f048f1a","type":"ResetTool"},{"id":"3b4793eb-0e3a-45fe-a330-8a5efe1dfd1b","type":"SaveTool"}]},"id":"228a1fdc-d940-43a6-997d-202290c0035b","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.3},"x":{"field":"x"},"y":{"field":"y"}},"id":"eac21ee3-f317-49d6-a6fc-52135ebe564f","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2.5,3,2],"y":[2,3,1,1.5]}},"id":"1b3a5fd8-d086-4838-b0b3-92d00ccb39d0","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"610802b6-90c1-420a-8f26-91bf4ab338d2","type":"BasicTickFormatter"},"plot":{"id":"2e49564b-c70b-481e-b6a1-ec604799fdfe","subtype":"Figure","type":"Plot"},"ticker":{"id":"1467ff87-12cf-4fca-92f2-6b45f040b3eb","type":"BasicTicker"}},"id":"48ec4a6e-fd92-43b3-99cf-bdc7b0ca87ba","type":"LinearAxis"},{"attributes":{"plot":{"id":"2e49564b-c70b-481e-b6a1-ec604799fdfe","subtype":"Figure","type":"Plot"},"ticker":{"id":"67dfb6d1-d853-447a-823f-6b2bc350d931","type":"BasicTicker"}},"id":"a437319a-8748-41aa-b819-fc5cc72929ce","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"e06a083e-c81f-4c15-9eef-5698bc4a63e8","type":"Title"},{"attributes":{"callback":null},"id":"8ac97196-0f44-40ea-a345-ec37a4f80eea","type":"DataRange1d"},{"attributes":{},"id":"610802b6-90c1-420a-8f26-91bf4ab338d2","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"d3bc2801-4727-4634-afbd-9dbdfce02cee","type":"BasicTickFormatter"},"plot":{"id":"2e49564b-c70b-481e-b6a1-ec604799fdfe","subtype":"Figure","type":"Plot"},"ticker":{"id":"67dfb6d1-d853-447a-823f-6b2bc350d931","type":"BasicTicker"}},"id":"2427c630-ab47-4d7e-be8f-bc55e5c96bf3","type":"LinearAxis"},{"attributes":{},"id":"d3bc2801-4727-4634-afbd-9dbdfce02cee","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"f4599007-ed16-410d-965f-cb873ba8ca51","type":"DataRange1d"},{"attributes":{"plot":{"id":"2e49564b-c70b-481e-b6a1-ec604799fdfe","subtype":"Figure","type":"Plot"}},"id":"49d4573b-6858-4a8d-b275-b6869d3da1d4","type":"PanTool"},{"attributes":{},"id":"1467ff87-12cf-4fca-92f2-6b45f040b3eb","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.3},"x":{"field":"x"},"y":{"field":"y"}},"id":"cdf8d838-3441-43dd-94f7-228158d10eda","type":"Circle"}],"root_ids":["2e49564b-c70b-481e-b6a1-ec604799fdfe"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"c8f7f4e9-2a18-4d46-9c41-25e406db8880","elementid":"3b99e9da-d325-4d0e-aaf2-1bfb972b53cf","modelid":"2e49564b-c70b-481e-b6a1-ec604799fdfe"}];
                
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
