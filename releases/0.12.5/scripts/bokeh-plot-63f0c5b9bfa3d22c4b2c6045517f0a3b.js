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
      };var element = document.getElementById("ce9b2087-4d2d-4394-8fe7-76cd4705b017");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ce9b2087-4d2d-4394-8fe7-76cd4705b017' but no matching script tag was found. ")
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
                var docs_json = {"ab0b5ed5-6a04-4708-b782-8dfbfb1b4d7d":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"e9de37fa-4a5a-4521-8832-e6fa7cc4e515","type":"BoxSelectTool"}]},"id":"7b643e8d-6795-4ce5-b253-26d5ab7d7ed3","type":"Toolbar"},{"attributes":{"below":[{"id":"505ec414-50cb-459d-bc6c-5d7806f1b4a7","type":"LinearAxis"}],"left":[{"id":"6a667040-35c2-4544-8907-f171a7ed50cf","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"505ec414-50cb-459d-bc6c-5d7806f1b4a7","type":"LinearAxis"},{"id":"31669d3a-1c5f-409b-b789-f162fe671a69","type":"Grid"},{"id":"6a667040-35c2-4544-8907-f171a7ed50cf","type":"LinearAxis"},{"id":"6e3ca71a-5992-454a-8598-c52c858ac92f","type":"Grid"},{"id":"0680e581-0e19-48ca-ab1a-9a7553acd08c","type":"BoxAnnotation"},{"id":"ff8318c8-6c43-4705-88bb-9a17238db1c7","type":"GlyphRenderer"}],"title":{"id":"dd1d10ed-3cf8-41d4-8842-c2f6fcc736a3","type":"Title"},"tool_events":{"id":"11288acc-0c30-4fe8-8279-2c855256ca57","type":"ToolEvents"},"toolbar":{"id":"7b643e8d-6795-4ce5-b253-26d5ab7d7ed3","type":"Toolbar"},"x_range":{"id":"a6cec037-457e-486a-a4bf-57a6b6596a71","type":"Range1d"},"y_range":{"id":"b56c2d6e-f47a-413d-aac0-e63caac5ef89","type":"Range1d"}},"id":"fd42cacb-8d83-4b1e-97e1-5c879938df59","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"6d41475b-d564-485d-9547-a0b724996a09","type":"BasicTickFormatter"},{"attributes":{"callback":{"id":"3b12b692-cd2b-4116-9927-de880aae89eb","type":"CustomJS"},"overlay":{"id":"0680e581-0e19-48ca-ab1a-9a7553acd08c","type":"BoxAnnotation"},"plot":{"id":"fd42cacb-8d83-4b1e-97e1-5c879938df59","subtype":"Figure","type":"Plot"}},"id":"e9de37fa-4a5a-4521-8832-e6fa7cc4e515","type":"BoxSelectTool"},{"attributes":{"data_source":{"id":"e0407495-dbe1-4ff3-8b1a-ef0b78ca8183","type":"ColumnDataSource"},"glyph":{"id":"7ec9d5f4-6885-4e96-a2ad-fafb4480b1d4","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7ec9d5f4-6885-4e96-a2ad-fafb4480b1d4","type":"Rect"},"selection_glyph":{"id":"7ec9d5f4-6885-4e96-a2ad-fafb4480b1d4","type":"Rect"}},"id":"ff8318c8-6c43-4705-88bb-9a17238db1c7","type":"GlyphRenderer"},{"attributes":{},"id":"40fa564d-28eb-4880-8987-34eb6e2e6ea0","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["height","width","x","y"],"data":{"height":[],"width":[],"x":[],"y":[]}},"id":"e0407495-dbe1-4ff3-8b1a-ef0b78ca8183","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"0680e581-0e19-48ca-ab1a-9a7553acd08c","type":"BoxAnnotation"},{"attributes":{"dimension":1,"plot":{"id":"fd42cacb-8d83-4b1e-97e1-5c879938df59","subtype":"Figure","type":"Plot"},"ticker":{"id":"3fd544ab-cecc-4100-a084-c29dc58d557a","type":"BasicTicker"}},"id":"6e3ca71a-5992-454a-8598-c52c858ac92f","type":"Grid"},{"attributes":{"callback":null},"id":"b56c2d6e-f47a-413d-aac0-e63caac5ef89","type":"Range1d"},{"attributes":{},"id":"3fd544ab-cecc-4100-a084-c29dc58d557a","type":"BasicTicker"},{"attributes":{},"id":"b46e6312-2fb2-40b7-9a2a-8ea07fbb00b4","type":"BasicTicker"},{"attributes":{},"id":"11288acc-0c30-4fe8-8279-2c855256ca57","type":"ToolEvents"},{"attributes":{"formatter":{"id":"40fa564d-28eb-4880-8987-34eb6e2e6ea0","type":"BasicTickFormatter"},"plot":{"id":"fd42cacb-8d83-4b1e-97e1-5c879938df59","subtype":"Figure","type":"Plot"},"ticker":{"id":"3fd544ab-cecc-4100-a084-c29dc58d557a","type":"BasicTicker"}},"id":"6a667040-35c2-4544-8907-f171a7ed50cf","type":"LinearAxis"},{"attributes":{"plot":{"id":"fd42cacb-8d83-4b1e-97e1-5c879938df59","subtype":"Figure","type":"Plot"},"ticker":{"id":"b46e6312-2fb2-40b7-9a2a-8ea07fbb00b4","type":"BasicTicker"}},"id":"31669d3a-1c5f-409b-b789-f162fe671a69","type":"Grid"},{"attributes":{"args":{"source":{"id":"e0407495-dbe1-4ff3-8b1a-ef0b78ca8183","type":"ColumnDataSource"}},"code":"\n        // get data source from Callback args\n        var data = source.data;\n\n        /// get BoxSelectTool dimensions from cb_data parameter of Callback\n        var geometry = cb_data['geometry'];\n\n        /// calculate Rect attributes\n        var width = geometry['x1'] - geometry['x0'];\n        var height = geometry['y1'] - geometry['y0'];\n        var x = geometry['x0'] + width/2;\n        var y = geometry['y0'] + height/2;\n\n        /// update data source with new Rect attributes\n        data['x'].push(x);\n        data['y'].push(y);\n        data['width'].push(width);\n        data['height'].push(height);\n\n        // trigger update of data source\n        source.trigger('change');\n    "},"id":"3b12b692-cd2b-4116-9927-de880aae89eb","type":"CustomJS"},{"attributes":{"formatter":{"id":"6d41475b-d564-485d-9547-a0b724996a09","type":"BasicTickFormatter"},"plot":{"id":"fd42cacb-8d83-4b1e-97e1-5c879938df59","subtype":"Figure","type":"Plot"},"ticker":{"id":"b46e6312-2fb2-40b7-9a2a-8ea07fbb00b4","type":"BasicTicker"}},"id":"505ec414-50cb-459d-bc6c-5d7806f1b4a7","type":"LinearAxis"},{"attributes":{"plot":null,"text":"Select Below"},"id":"dd1d10ed-3cf8-41d4-8842-c2f6fcc736a3","type":"Title"},{"attributes":{"fill_alpha":{"value":0.3},"fill_color":{"value":"#009933"},"height":{"field":"height","units":"data"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"7ec9d5f4-6885-4e96-a2ad-fafb4480b1d4","type":"Rect"},{"attributes":{"callback":null},"id":"a6cec037-457e-486a-a4bf-57a6b6596a71","type":"Range1d"}],"root_ids":["fd42cacb-8d83-4b1e-97e1-5c879938df59"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"ab0b5ed5-6a04-4708-b782-8dfbfb1b4d7d","elementid":"ce9b2087-4d2d-4394-8fe7-76cd4705b017","modelid":"fd42cacb-8d83-4b1e-97e1-5c879938df59"}];
                
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
