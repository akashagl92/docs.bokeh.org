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
      };var element = document.getElementById("710ba775-3e0d-4aa2-b8f9-e06bc8dbbefc");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '710ba775-3e0d-4aa2-b8f9-e06bc8dbbefc' but no matching script tag was found. ")
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
                var docs_json = {"8d0f3c8b-1df1-4de2-bcfe-a208f65d4f1c":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"83f15982-b2e3-41a6-8a60-32ab204bbdac","type":"Circle"},{"attributes":{"plot":{"id":"0b297860-7e69-4e38-ab8b-b99d5ec61f3a","subtype":"Figure","type":"Plot"}},"id":"0719d2d9-a23e-4500-87f9-109983d1b356","type":"WheelZoomTool"},{"attributes":{},"id":"8402170f-0a03-4749-a7ea-69cb68ddbcc6","type":"BasicTicker"},{"attributes":{"format":"0.0%"},"id":"360f3bac-69ba-4792-83ce-3088a68a0f8d","type":"NumeralTickFormatter"},{"attributes":{"plot":{"id":"0b297860-7e69-4e38-ab8b-b99d5ec61f3a","subtype":"Figure","type":"Plot"}},"id":"e2b3a009-994c-41fb-ab34-d218a4a79970","type":"HelpTool"},{"attributes":{"dimension":1,"plot":{"id":"0b297860-7e69-4e38-ab8b-b99d5ec61f3a","subtype":"Figure","type":"Plot"},"ticker":{"id":"8402170f-0a03-4749-a7ea-69cb68ddbcc6","type":"BasicTicker"}},"id":"67d2824d-397c-4997-89e7-705d5d854666","type":"Grid"},{"attributes":{"callback":null},"id":"a2d13407-5462-4de5-a07b-169d79b519fb","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"3b0b7858-835f-432c-a750-36f23b12058d","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"9974186c-9302-4368-900a-306f96b78f25","type":"NumeralTickFormatter"},"plot":{"id":"0b297860-7e69-4e38-ab8b-b99d5ec61f3a","subtype":"Figure","type":"Plot"},"ticker":{"id":"8402170f-0a03-4749-a7ea-69cb68ddbcc6","type":"BasicTicker"}},"id":"72494efb-169a-49ff-9425-5bc3cdfa8ad4","type":"LinearAxis"},{"attributes":{"formatter":{"id":"360f3bac-69ba-4792-83ce-3088a68a0f8d","type":"NumeralTickFormatter"},"plot":{"id":"0b297860-7e69-4e38-ab8b-b99d5ec61f3a","subtype":"Figure","type":"Plot"},"ticker":{"id":"06935311-7a25-4568-8672-07f77b1cb181","type":"BasicTicker"}},"id":"709449f7-1d8d-4e96-8c47-3c25552d1799","type":"LinearAxis"},{"attributes":{"plot":{"id":"0b297860-7e69-4e38-ab8b-b99d5ec61f3a","subtype":"Figure","type":"Plot"},"ticker":{"id":"06935311-7a25-4568-8672-07f77b1cb181","type":"BasicTicker"}},"id":"36d9944b-bf7c-461d-ae98-495fd8bc6be7","type":"Grid"},{"attributes":{},"id":"06935311-7a25-4568-8672-07f77b1cb181","type":"BasicTicker"},{"attributes":{"plot":{"id":"0b297860-7e69-4e38-ab8b-b99d5ec61f3a","subtype":"Figure","type":"Plot"}},"id":"9c1c5a92-c9e5-469f-bb70-447cbaa7b7c8","type":"ResetTool"},{"attributes":{"plot":{"id":"0b297860-7e69-4e38-ab8b-b99d5ec61f3a","subtype":"Figure","type":"Plot"}},"id":"8cc1c62e-e139-41d5-a73d-9a3cac01a21a","type":"PanTool"},{"attributes":{"callback":null},"id":"46e64d30-d458-43b9-9c4a-8d61e6e570c9","type":"DataRange1d"},{"attributes":{"plot":{"id":"0b297860-7e69-4e38-ab8b-b99d5ec61f3a","subtype":"Figure","type":"Plot"}},"id":"22643cf1-0563-49e7-a300-f693b593c7bf","type":"SaveTool"},{"attributes":{},"id":"7f9419c4-7fd2-4eff-b781-45393fbb5b9c","type":"ToolEvents"},{"attributes":{"format":"$0.00"},"id":"9974186c-9302-4368-900a-306f96b78f25","type":"NumeralTickFormatter"},{"attributes":{"overlay":{"id":"3b0b7858-835f-432c-a750-36f23b12058d","type":"BoxAnnotation"},"plot":{"id":"0b297860-7e69-4e38-ab8b-b99d5ec61f3a","subtype":"Figure","type":"Plot"}},"id":"1c4f31df-56f2-4859-97b0-7ce882d65aac","type":"BoxZoomTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"95f0ea2a-abf6-46b9-8f62-c043727fcba6","type":"Circle"},{"attributes":{"below":[{"id":"709449f7-1d8d-4e96-8c47-3c25552d1799","type":"LinearAxis"}],"left":[{"id":"72494efb-169a-49ff-9425-5bc3cdfa8ad4","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"709449f7-1d8d-4e96-8c47-3c25552d1799","type":"LinearAxis"},{"id":"36d9944b-bf7c-461d-ae98-495fd8bc6be7","type":"Grid"},{"id":"72494efb-169a-49ff-9425-5bc3cdfa8ad4","type":"LinearAxis"},{"id":"67d2824d-397c-4997-89e7-705d5d854666","type":"Grid"},{"id":"3b0b7858-835f-432c-a750-36f23b12058d","type":"BoxAnnotation"},{"id":"2ff09c94-c0d5-416b-a0f8-01f2d7aadc4c","type":"GlyphRenderer"}],"title":{"id":"2b7054d1-2841-4899-8c7d-60425667461a","type":"Title"},"tool_events":{"id":"7f9419c4-7fd2-4eff-b781-45393fbb5b9c","type":"ToolEvents"},"toolbar":{"id":"477f5246-ce31-49da-976c-a56c4c268219","type":"Toolbar"},"x_range":{"id":"a2d13407-5462-4de5-a07b-169d79b519fb","type":"DataRange1d"},"y_range":{"id":"46e64d30-d458-43b9-9c4a-8d61e6e570c9","type":"DataRange1d"}},"id":"0b297860-7e69-4e38-ab8b-b99d5ec61f3a","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":""},"id":"2b7054d1-2841-4899-8c7d-60425667461a","type":"Title"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"8cc1c62e-e139-41d5-a73d-9a3cac01a21a","type":"PanTool"},{"id":"0719d2d9-a23e-4500-87f9-109983d1b356","type":"WheelZoomTool"},{"id":"1c4f31df-56f2-4859-97b0-7ce882d65aac","type":"BoxZoomTool"},{"id":"22643cf1-0563-49e7-a300-f693b593c7bf","type":"SaveTool"},{"id":"9c1c5a92-c9e5-469f-bb70-447cbaa7b7c8","type":"ResetTool"},{"id":"e2b3a009-994c-41fb-ab34-d218a4a79970","type":"HelpTool"}]},"id":"477f5246-ce31-49da-976c-a56c4c268219","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"5c12caa5-b08b-4de6-991e-19d73b341878","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"5c12caa5-b08b-4de6-991e-19d73b341878","type":"ColumnDataSource"},"glyph":{"id":"95f0ea2a-abf6-46b9-8f62-c043727fcba6","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"83f15982-b2e3-41a6-8a60-32ab204bbdac","type":"Circle"},"selection_glyph":null},"id":"2ff09c94-c0d5-416b-a0f8-01f2d7aadc4c","type":"GlyphRenderer"}],"root_ids":["0b297860-7e69-4e38-ab8b-b99d5ec61f3a"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"8d0f3c8b-1df1-4de2-bcfe-a208f65d4f1c","elementid":"710ba775-3e0d-4aa2-b8f9-e06bc8dbbefc","modelid":"0b297860-7e69-4e38-ab8b-b99d5ec61f3a"}];
                
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
