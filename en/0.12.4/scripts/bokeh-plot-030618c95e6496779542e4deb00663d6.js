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
      };var element = document.getElementById("f83c87b7-5244-429f-86ce-1bd38e0a2d96");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f83c87b7-5244-429f-86ce-1bd38e0a2d96' but no matching script tag was found. ")
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
                var docs_json = {"1ce95898-3f16-4e2a-b20d-a39a2e7d2c14":{"roots":{"references":[{"attributes":{"overlay":{"id":"013ff188-1804-45c3-bb0e-e30dee606e43","type":"BoxAnnotation"},"plot":{"id":"dea5f1f9-a719-45aa-9bb3-9cdf1a73d0fe","subtype":"Figure","type":"Plot"}},"id":"14da0ec3-c558-428f-9527-a7aa6703be92","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"dea5f1f9-a719-45aa-9bb3-9cdf1a73d0fe","subtype":"Figure","type":"Plot"}},"id":"1b3d1c41-a77a-497e-95a0-16ce147cde99","type":"WheelZoomTool"},{"attributes":{"line_color":{"value":"#F4A582"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"0d770edb-8db0-416f-9027-f267d30467d3","type":"Segment"},{"attributes":{"data_source":{"id":"d0e8ee2c-c4fd-4d65-921b-79fff1396a6b","type":"ColumnDataSource"},"glyph":{"id":"0d770edb-8db0-416f-9027-f267d30467d3","type":"Segment"},"hover_glyph":null,"nonselection_glyph":{"id":"1969ba6e-67c4-44b6-9646-50c5d7dd1425","type":"Segment"},"selection_glyph":null},"id":"b457feb3-1418-4870-b773-6127a77d642c","type":"GlyphRenderer"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"1969ba6e-67c4-44b6-9646-50c5d7dd1425","type":"Segment"},{"attributes":{"plot":{"id":"dea5f1f9-a719-45aa-9bb3-9cdf1a73d0fe","subtype":"Figure","type":"Plot"}},"id":"0ddfa7c0-56ee-4d80-afda-98284f0c314e","type":"ResetTool"},{"attributes":{"callback":null},"id":"542383fd-782e-499e-847d-8d30bec728d1","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"013ff188-1804-45c3-bb0e-e30dee606e43","type":"BoxAnnotation"},{"attributes":{},"id":"31ff39d5-d9cc-4416-a846-26038aebb18d","type":"BasicTicker"},{"attributes":{"below":[{"id":"ead83525-808f-46a5-a255-dac4443aeeff","type":"LinearAxis"}],"left":[{"id":"8cca51a3-a48a-4feb-8d55-fdc45fddafb1","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"ead83525-808f-46a5-a255-dac4443aeeff","type":"LinearAxis"},{"id":"70725e01-16f8-4c05-bb4c-19589cd61417","type":"Grid"},{"id":"8cca51a3-a48a-4feb-8d55-fdc45fddafb1","type":"LinearAxis"},{"id":"9fb53fa0-634a-4213-b7d4-43bf96c41ff3","type":"Grid"},{"id":"013ff188-1804-45c3-bb0e-e30dee606e43","type":"BoxAnnotation"},{"id":"b457feb3-1418-4870-b773-6127a77d642c","type":"GlyphRenderer"}],"title":{"id":"6c638893-228a-48cc-a71e-d9ae196fb9a5","type":"Title"},"tool_events":{"id":"dbf36bd1-9723-497d-b56f-99d1db2cab97","type":"ToolEvents"},"toolbar":{"id":"94fbeb2a-7c95-4ce7-98b0-885dd2c89fd1","type":"Toolbar"},"x_range":{"id":"253a5e0c-5d2c-4a8f-9cc2-860b09bb2afa","type":"DataRange1d"},"y_range":{"id":"542383fd-782e-499e-847d-8d30bec728d1","type":"DataRange1d"}},"id":"dea5f1f9-a719-45aa-9bb3-9cdf1a73d0fe","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"dbf36bd1-9723-497d-b56f-99d1db2cab97","type":"ToolEvents"},{"attributes":{"plot":{"id":"dea5f1f9-a719-45aa-9bb3-9cdf1a73d0fe","subtype":"Figure","type":"Plot"}},"id":"fdbb5dc9-e88b-42a3-9fc4-f12fa9bb029f","type":"PanTool"},{"attributes":{"plot":{"id":"dea5f1f9-a719-45aa-9bb3-9cdf1a73d0fe","subtype":"Figure","type":"Plot"}},"id":"14a616f3-63f1-44ef-a55d-bf5a1ef359c4","type":"HelpTool"},{"attributes":{"plot":{"id":"dea5f1f9-a719-45aa-9bb3-9cdf1a73d0fe","subtype":"Figure","type":"Plot"}},"id":"09006668-a562-4602-b185-4a852d1d39e6","type":"SaveTool"},{"attributes":{"dimension":1,"plot":{"id":"dea5f1f9-a719-45aa-9bb3-9cdf1a73d0fe","subtype":"Figure","type":"Plot"},"ticker":{"id":"e2c19bfc-9add-4763-8683-e9b1ca5778d1","type":"BasicTicker"}},"id":"9fb53fa0-634a-4213-b7d4-43bf96c41ff3","type":"Grid"},{"attributes":{"callback":null},"id":"253a5e0c-5d2c-4a8f-9cc2-860b09bb2afa","type":"DataRange1d"},{"attributes":{},"id":"5e615061-33cf-4cf7-a1cd-1be4377c8936","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"99513252-175b-4a59-b2a9-1db7c7045c71","type":"BasicTickFormatter"},"plot":{"id":"dea5f1f9-a719-45aa-9bb3-9cdf1a73d0fe","subtype":"Figure","type":"Plot"},"ticker":{"id":"e2c19bfc-9add-4763-8683-e9b1ca5778d1","type":"BasicTicker"}},"id":"8cca51a3-a48a-4feb-8d55-fdc45fddafb1","type":"LinearAxis"},{"attributes":{"formatter":{"id":"5e615061-33cf-4cf7-a1cd-1be4377c8936","type":"BasicTickFormatter"},"plot":{"id":"dea5f1f9-a719-45aa-9bb3-9cdf1a73d0fe","subtype":"Figure","type":"Plot"},"ticker":{"id":"31ff39d5-d9cc-4416-a846-26038aebb18d","type":"BasicTicker"}},"id":"ead83525-808f-46a5-a255-dac4443aeeff","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y0","x0","x1","y1"],"data":{"x0":[1,2,3],"x1":[1.2,2.4,3.1],"y0":[1,2,3],"y1":[1.2,2.5,3.7]}},"id":"d0e8ee2c-c4fd-4d65-921b-79fff1396a6b","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":""},"id":"6c638893-228a-48cc-a71e-d9ae196fb9a5","type":"Title"},{"attributes":{"plot":{"id":"dea5f1f9-a719-45aa-9bb3-9cdf1a73d0fe","subtype":"Figure","type":"Plot"},"ticker":{"id":"31ff39d5-d9cc-4416-a846-26038aebb18d","type":"BasicTicker"}},"id":"70725e01-16f8-4c05-bb4c-19589cd61417","type":"Grid"},{"attributes":{},"id":"99513252-175b-4a59-b2a9-1db7c7045c71","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"fdbb5dc9-e88b-42a3-9fc4-f12fa9bb029f","type":"PanTool"},{"id":"1b3d1c41-a77a-497e-95a0-16ce147cde99","type":"WheelZoomTool"},{"id":"14da0ec3-c558-428f-9527-a7aa6703be92","type":"BoxZoomTool"},{"id":"09006668-a562-4602-b185-4a852d1d39e6","type":"SaveTool"},{"id":"0ddfa7c0-56ee-4d80-afda-98284f0c314e","type":"ResetTool"},{"id":"14a616f3-63f1-44ef-a55d-bf5a1ef359c4","type":"HelpTool"}]},"id":"94fbeb2a-7c95-4ce7-98b0-885dd2c89fd1","type":"Toolbar"},{"attributes":{},"id":"e2c19bfc-9add-4763-8683-e9b1ca5778d1","type":"BasicTicker"}],"root_ids":["dea5f1f9-a719-45aa-9bb3-9cdf1a73d0fe"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"1ce95898-3f16-4e2a-b20d-a39a2e7d2c14","elementid":"f83c87b7-5244-429f-86ce-1bd38e0a2d96","modelid":"dea5f1f9-a719-45aa-9bb3-9cdf1a73d0fe"}];
                
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
