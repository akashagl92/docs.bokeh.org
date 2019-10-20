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
      };var element = document.getElementById("3ee9ebf6-a273-4f39-875d-468088d85f64");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '3ee9ebf6-a273-4f39-875d-468088d85f64' but no matching script tag was found. ")
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
                var docs_json = {"e82db81f-f9ba-4105-a8d6-038c0e332061":{"roots":{"references":[{"attributes":{"plot":{"id":"7572eaf1-bd58-4147-99d5-d0ee5e1100fd","subtype":"Figure","type":"Plot"}},"id":"e9c55352-0e15-4464-944d-c61bda41971e","type":"WheelZoomTool"},{"attributes":{},"id":"ab1c4b5d-073a-4313-bc5e-54fdaded8b19","type":"BasicTicker"},{"attributes":{"plot":{"id":"7572eaf1-bd58-4147-99d5-d0ee5e1100fd","subtype":"Figure","type":"Plot"}},"id":"7afd4371-ca4d-4c43-99f2-e01381b97c89","type":"HelpTool"},{"attributes":{"data_source":{"id":"6a47414a-e0c4-42b6-a771-366b926a28b2","type":"ColumnDataSource"},"glyph":{"id":"6cdb19d9-f39c-413c-8cd9-b2ffb5512c98","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"74d2ce9f-6e7f-4888-92aa-695135b5d39d","type":"Line"},"selection_glyph":null},"id":"916b5744-89fb-498a-8bcd-38a32ac7333b","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"0d759349-e962-4acd-8e29-ff534d7402ff","type":"LinearAxis"}],"left":[{"id":"55274fec-c900-410c-8b41-164bde103bcb","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"0d759349-e962-4acd-8e29-ff534d7402ff","type":"LinearAxis"},{"id":"d09ec84e-1945-4a66-8cde-5284aa31051f","type":"Grid"},{"id":"55274fec-c900-410c-8b41-164bde103bcb","type":"LinearAxis"},{"id":"8048fa81-169e-4379-b6d3-778ca563f56a","type":"Grid"},{"id":"a23f1ac9-828b-4ee2-ab55-e3f1ec55e0dc","type":"BoxAnnotation"},{"id":"916b5744-89fb-498a-8bcd-38a32ac7333b","type":"GlyphRenderer"},{"id":"6f0e30df-9bf8-41b0-8e90-9bca87667f96","type":"GlyphRenderer"}],"title":{"id":"099427e1-e10b-4fa2-beb4-5605c7968104","type":"Title"},"tool_events":{"id":"81c372a0-1cac-4275-b172-0dd9d941d269","type":"ToolEvents"},"toolbar":{"id":"38cee350-cd34-46d8-90df-dec25c1afd21","type":"Toolbar"},"x_range":{"id":"b99b7e8d-a49d-4a3b-9b09-f550e337eed8","type":"DataRange1d"},"y_range":{"id":"690c51c2-39e0-447e-a3e8-946b04ffb49d","type":"DataRange1d"}},"id":"7572eaf1-bd58-4147-99d5-d0ee5e1100fd","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"7572eaf1-bd58-4147-99d5-d0ee5e1100fd","subtype":"Figure","type":"Plot"}},"id":"3ebe83dd-02fb-4ae3-9d4a-49461bad2f78","type":"PanTool"},{"attributes":{"plot":{"id":"7572eaf1-bd58-4147-99d5-d0ee5e1100fd","subtype":"Figure","type":"Plot"}},"id":"d27c74d9-8532-479c-962a-12cb9a6975ad","type":"SaveTool"},{"attributes":{"dimension":1,"plot":{"id":"7572eaf1-bd58-4147-99d5-d0ee5e1100fd","subtype":"Figure","type":"Plot"},"ticker":{"id":"ab1c4b5d-073a-4313-bc5e-54fdaded8b19","type":"BasicTicker"}},"id":"8048fa81-169e-4379-b6d3-778ca563f56a","type":"Grid"},{"attributes":{},"id":"df835712-2a53-4370-8715-10e6683443a1","type":"BasicTicker"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"74d2ce9f-6e7f-4888-92aa-695135b5d39d","type":"Line"},{"attributes":{},"id":"81c372a0-1cac-4275-b172-0dd9d941d269","type":"ToolEvents"},{"attributes":{"plot":{"id":"7572eaf1-bd58-4147-99d5-d0ee5e1100fd","subtype":"Figure","type":"Plot"}},"id":"9d02b91b-2456-4756-8ad0-ba7eedbc0f03","type":"ResetTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"3ebe83dd-02fb-4ae3-9d4a-49461bad2f78","type":"PanTool"},{"id":"e9c55352-0e15-4464-944d-c61bda41971e","type":"WheelZoomTool"},{"id":"1e004787-4379-4ce7-831c-73c03a0c1c0f","type":"BoxZoomTool"},{"id":"d27c74d9-8532-479c-962a-12cb9a6975ad","type":"SaveTool"},{"id":"9d02b91b-2456-4756-8ad0-ba7eedbc0f03","type":"ResetTool"},{"id":"7afd4371-ca4d-4c43-99f2-e01381b97c89","type":"HelpTool"}]},"id":"38cee350-cd34-46d8-90df-dec25c1afd21","type":"Toolbar"},{"attributes":{"data_source":{"id":"e8b109f3-bc99-419c-aa49-3a340b494579","type":"ColumnDataSource"},"glyph":{"id":"b05ea092-d73e-4cba-a1e4-4d1ba6176566","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"796d6447-d77e-43e1-8253-48a21734297c","type":"Circle"},"selection_glyph":null},"id":"6f0e30df-9bf8-41b0-8e90-9bca87667f96","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"b05ea092-d73e-4cba-a1e4-4d1ba6176566","type":"Circle"},{"attributes":{"callback":null},"id":"690c51c2-39e0-447e-a3e8-946b04ffb49d","type":"DataRange1d"},{"attributes":{"plot":{"id":"7572eaf1-bd58-4147-99d5-d0ee5e1100fd","subtype":"Figure","type":"Plot"},"ticker":{"id":"df835712-2a53-4370-8715-10e6683443a1","type":"BasicTicker"}},"id":"d09ec84e-1945-4a66-8cde-5284aa31051f","type":"Grid"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,8,7,3]}},"id":"6a47414a-e0c4-42b6-a771-366b926a28b2","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"612ac8b0-9a6f-4c50-8af0-dd43c490c0f5","type":"BasicTickFormatter"},"plot":{"id":"7572eaf1-bd58-4147-99d5-d0ee5e1100fd","subtype":"Figure","type":"Plot"},"ticker":{"id":"ab1c4b5d-073a-4313-bc5e-54fdaded8b19","type":"BasicTicker"}},"id":"55274fec-c900-410c-8b41-164bde103bcb","type":"LinearAxis"},{"attributes":{},"id":"a1f0d935-b6b6-4954-b59e-01bd168d008e","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"b99b7e8d-a49d-4a3b-9b09-f550e337eed8","type":"DataRange1d"},{"attributes":{"overlay":{"id":"a23f1ac9-828b-4ee2-ab55-e3f1ec55e0dc","type":"BoxAnnotation"},"plot":{"id":"7572eaf1-bd58-4147-99d5-d0ee5e1100fd","subtype":"Figure","type":"Plot"}},"id":"1e004787-4379-4ce7-831c-73c03a0c1c0f","type":"BoxZoomTool"},{"attributes":{"plot":null,"text":""},"id":"099427e1-e10b-4fa2-beb4-5605c7968104","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"796d6447-d77e-43e1-8253-48a21734297c","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"a23f1ac9-828b-4ee2-ab55-e3f1ec55e0dc","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"a1f0d935-b6b6-4954-b59e-01bd168d008e","type":"BasicTickFormatter"},"plot":{"id":"7572eaf1-bd58-4147-99d5-d0ee5e1100fd","subtype":"Figure","type":"Plot"},"ticker":{"id":"df835712-2a53-4370-8715-10e6683443a1","type":"BasicTicker"}},"id":"0d759349-e962-4acd-8e29-ff534d7402ff","type":"LinearAxis"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"6cdb19d9-f39c-413c-8cd9-b2ffb5512c98","type":"Line"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,8,7,3]}},"id":"e8b109f3-bc99-419c-aa49-3a340b494579","type":"ColumnDataSource"},{"attributes":{},"id":"612ac8b0-9a6f-4c50-8af0-dd43c490c0f5","type":"BasicTickFormatter"}],"root_ids":["7572eaf1-bd58-4147-99d5-d0ee5e1100fd"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"e82db81f-f9ba-4105-a8d6-038c0e332061","elementid":"3ee9ebf6-a273-4f39-875d-468088d85f64","modelid":"7572eaf1-bd58-4147-99d5-d0ee5e1100fd"}];
                
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
