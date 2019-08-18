document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = "";
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force !== "") {
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
      };var element = document.getElementById("ef9d0c00-570b-4a29-9cba-d0bb34a3f05b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ef9d0c00-570b-4a29-9cba-d0bb34a3f05b' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.2.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"31b0b3e6-016e-458a-9850-3d7a98305ca7":{"roots":{"references":[{"attributes":{"overlay":{"id":"47492d97-a428-43af-9e97-25193650c390","type":"BoxAnnotation"},"plot":{"id":"7075569c-d52e-4b45-80fe-de2d297850ea","subtype":"Figure","type":"Plot"}},"id":"b62f1a3e-0970-4696-b244-de371c71670f","type":"BoxZoomTool"},{"attributes":{"fill_color":{"value":"#F0027F"},"line_color":{"value":"#F0027F"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"0fe4bffc-7d95-4803-a684-333599814d19","type":"Asterisk"},{"attributes":{"plot":{"id":"7075569c-d52e-4b45-80fe-de2d297850ea","subtype":"Figure","type":"Plot"}},"id":"893e7bc6-6b96-40ef-94e0-66f22c85cf88","type":"PanTool"},{"attributes":{},"id":"dce5907d-d4b5-452f-877a-0bddfa9cdaca","type":"ToolEvents"},{"attributes":{},"id":"c93828fd-64f3-4573-a837-e18c6264aa99","type":"BasicTicker"},{"attributes":{"formatter":{"id":"251627f3-fcbc-44b4-9b28-fce393ab135b","type":"BasicTickFormatter"},"plot":{"id":"7075569c-d52e-4b45-80fe-de2d297850ea","subtype":"Figure","type":"Plot"},"ticker":{"id":"c93828fd-64f3-4573-a837-e18c6264aa99","type":"BasicTicker"}},"id":"c7256401-4dad-43ed-beec-deadc8c901d3","type":"LinearAxis"},{"attributes":{"plot":{"id":"7075569c-d52e-4b45-80fe-de2d297850ea","subtype":"Figure","type":"Plot"}},"id":"4e1bdcd6-1900-4af3-badb-6b7407add84d","type":"HelpTool"},{"attributes":{"dimension":1,"plot":{"id":"7075569c-d52e-4b45-80fe-de2d297850ea","subtype":"Figure","type":"Plot"},"ticker":{"id":"c93828fd-64f3-4573-a837-e18c6264aa99","type":"BasicTicker"}},"id":"e16dea22-e92d-4024-887e-597b860e696d","type":"Grid"},{"attributes":{},"id":"251627f3-fcbc-44b4-9b28-fce393ab135b","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"7075569c-d52e-4b45-80fe-de2d297850ea","subtype":"Figure","type":"Plot"}},"id":"5b2f8d4e-1f04-4b8b-92cb-3c65729184f2","type":"ResetTool"},{"attributes":{"data_source":{"id":"24738f7a-7d79-48a7-8e52-68c2ad73d85d","type":"ColumnDataSource"},"glyph":{"id":"0fe4bffc-7d95-4803-a684-333599814d19","type":"Asterisk"},"hover_glyph":null,"nonselection_glyph":{"id":"2b52cf87-9857-4551-8ed8-1a32e5727ec3","type":"Asterisk"},"selection_glyph":null},"id":"81c78133-db4e-4eea-a007-676030eeca3a","type":"GlyphRenderer"},{"attributes":{},"id":"5208cd13-f381-4524-b48e-5fe85c27c511","type":"BasicTicker"},{"attributes":{},"id":"1d6010d0-15fe-4ec7-b0c8-d70a9c6a9ce0","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"7075569c-d52e-4b45-80fe-de2d297850ea","subtype":"Figure","type":"Plot"}},"id":"76c7572f-11d0-4f02-a337-a8328f8923da","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"97f1ab8f-2340-4e57-a48c-afe25b441bd8","type":"DataRange1d"},{"attributes":{"formatter":{"id":"1d6010d0-15fe-4ec7-b0c8-d70a9c6a9ce0","type":"BasicTickFormatter"},"plot":{"id":"7075569c-d52e-4b45-80fe-de2d297850ea","subtype":"Figure","type":"Plot"},"ticker":{"id":"5208cd13-f381-4524-b48e-5fe85c27c511","type":"BasicTicker"}},"id":"5dede4bf-f60c-4bc8-8cf6-348483f02a65","type":"LinearAxis"},{"attributes":{"plot":null,"text":null},"id":"07a30a72-3559-4657-bdcf-6be035e1e4b6","type":"Title"},{"attributes":{"plot":{"id":"7075569c-d52e-4b45-80fe-de2d297850ea","subtype":"Figure","type":"Plot"}},"id":"acd7ff89-84d7-4e55-8ccc-5bf7cdd364e6","type":"SaveTool"},{"attributes":{"callback":null},"id":"60870a8b-15f6-4463-9fbc-e19a564945af","type":"DataRange1d"},{"attributes":{"plot":{"id":"7075569c-d52e-4b45-80fe-de2d297850ea","subtype":"Figure","type":"Plot"},"ticker":{"id":"5208cd13-f381-4524-b48e-5fe85c27c511","type":"BasicTicker"}},"id":"ae231900-e9d5-4d7d-9baf-1a1612088e5f","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"47492d97-a428-43af-9e97-25193650c390","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"5dede4bf-f60c-4bc8-8cf6-348483f02a65","type":"LinearAxis"}],"left":[{"id":"c7256401-4dad-43ed-beec-deadc8c901d3","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"5dede4bf-f60c-4bc8-8cf6-348483f02a65","type":"LinearAxis"},{"id":"ae231900-e9d5-4d7d-9baf-1a1612088e5f","type":"Grid"},{"id":"c7256401-4dad-43ed-beec-deadc8c901d3","type":"LinearAxis"},{"id":"e16dea22-e92d-4024-887e-597b860e696d","type":"Grid"},{"id":"47492d97-a428-43af-9e97-25193650c390","type":"BoxAnnotation"},{"id":"81c78133-db4e-4eea-a007-676030eeca3a","type":"GlyphRenderer"}],"title":{"id":"07a30a72-3559-4657-bdcf-6be035e1e4b6","type":"Title"},"tool_events":{"id":"dce5907d-d4b5-452f-877a-0bddfa9cdaca","type":"ToolEvents"},"toolbar":{"id":"5fcb5d07-8973-43d7-a8d0-00eda8f03486","type":"Toolbar"},"x_range":{"id":"60870a8b-15f6-4463-9fbc-e19a564945af","type":"DataRange1d"},"y_range":{"id":"97f1ab8f-2340-4e57-a48c-afe25b441bd8","type":"DataRange1d"}},"id":"7075569c-d52e-4b45-80fe-de2d297850ea","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"2b52cf87-9857-4551-8ed8-1a32e5727ec3","type":"Asterisk"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"24738f7a-7d79-48a7-8e52-68c2ad73d85d","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"893e7bc6-6b96-40ef-94e0-66f22c85cf88","type":"PanTool"},{"id":"76c7572f-11d0-4f02-a337-a8328f8923da","type":"WheelZoomTool"},{"id":"b62f1a3e-0970-4696-b244-de371c71670f","type":"BoxZoomTool"},{"id":"acd7ff89-84d7-4e55-8ccc-5bf7cdd364e6","type":"SaveTool"},{"id":"5b2f8d4e-1f04-4b8b-92cb-3c65729184f2","type":"ResetTool"},{"id":"4e1bdcd6-1900-4af3-badb-6b7407add84d","type":"HelpTool"}]},"id":"5fcb5d07-8973-43d7-a8d0-00eda8f03486","type":"Toolbar"}],"root_ids":["7075569c-d52e-4b45-80fe-de2d297850ea"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"31b0b3e6-016e-458a-9850-3d7a98305ca7","elementid":"ef9d0c00-570b-4a29-9cba-d0bb34a3f05b","modelid":"7075569c-d52e-4b45-80fe-de2d297850ea"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
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
});