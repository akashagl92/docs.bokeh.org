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
      };var element = document.getElementById("12a72b3b-1f92-4d0e-a074-65a1ac627b29");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '12a72b3b-1f92-4d0e-a074-65a1ac627b29' but no matching script tag was found. ")
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
                var docs_json = {"7c4a7e67-210b-447a-8810-8c1bd6878703":{"roots":{"references":[{"attributes":{"formatter":{"id":"50ba7669-735c-47de-aa1d-b7620a041fad","type":"CategoricalTickFormatter"},"plot":{"id":"a99e126d-6578-41b9-9c67-a391bdf7a85f","subtype":"Figure","type":"Plot"},"ticker":{"id":"7cf74a7c-b7ad-4cb1-a1b0-2fef04bce849","type":"CategoricalTicker"}},"id":"c264b20d-7304-4407-b5fa-56819fc8573f","type":"CategoricalAxis"},{"attributes":{},"id":"7a4fbe36-5ed3-4353-8144-7ec53e06013b","type":"CategoricalTickFormatter"},{"attributes":{},"id":"50ba7669-735c-47de-aa1d-b7620a041fad","type":"CategoricalTickFormatter"},{"attributes":{"fill_color":{"field":"fill_color"},"height":{"units":"data","value":1},"line_color":{"field":"line_color"},"width":{"units":"data","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"2d9c667c-8e61-420b-b8fd-aad05eb30059","type":"Rect"},{"attributes":{"dimension":1,"plot":{"id":"5fd2cfbc-ff70-452c-bacb-decdce737b6f","subtype":"Figure","type":"Plot"},"ticker":{"id":"1e45e031-4bea-4db0-b912-9253636ad363","type":"CategoricalTicker"}},"id":"f063469d-a98e-4f20-9433-11c1ddb4d2ea","type":"Grid"},{"attributes":{"formatter":{"id":"14376738-4291-4816-b26e-7485b0df55c5","type":"CategoricalTickFormatter"},"plot":{"id":"5fd2cfbc-ff70-452c-bacb-decdce737b6f","subtype":"Figure","type":"Plot"},"ticker":{"id":"435b3a0c-2e7f-4879-8cd2-f8762f6105b7","type":"CategoricalTicker"}},"id":"bdbfcdef-da1e-4b4a-92bf-daaa9b0ff793","type":"CategoricalAxis"},{"attributes":{"children":[{"id":"5fd2cfbc-ff70-452c-bacb-decdce737b6f","subtype":"Figure","type":"Plot"},{"id":"a99e126d-6578-41b9-9c67-a391bdf7a85f","subtype":"Figure","type":"Plot"}],"sizing_mode":"scale_width"},"id":"974981d1-9164-4a43-9aed-df3436d9c80e","type":"Row"},{"attributes":{"plot":{"id":"5fd2cfbc-ff70-452c-bacb-decdce737b6f","subtype":"Figure","type":"Plot"},"ticker":{"id":"435b3a0c-2e7f-4879-8cd2-f8762f6105b7","type":"CategoricalTicker"}},"id":"7808efe3-0979-4974-ada9-186570c8b116","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"ef6bd687-eeb6-47d5-8604-a5f1200af5ab","type":"Rect"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"green"},"line_width":{"value":3},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"6ceedb39-e861-4e0f-ba01-fa6223467c6a","type":"Circle"},{"attributes":{},"id":"449f100b-588a-4bf4-8705-cd86b65fc52b","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"50565a46-f6ea-4fcb-ba48-905e41a370e8","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[50,40,65,10,25,37,80,60],"y":["a","b","c","d","e","f","g","h"]}},"id":"b6b7cd6b-15a8-42e1-9d86-0d29f7cc6cb2","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"b6b7cd6b-15a8-42e1-9d86-0d29f7cc6cb2","type":"ColumnDataSource"},"glyph":{"id":"6ceedb39-e861-4e0f-ba01-fa6223467c6a","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"a8b5cf3d-e95b-43c1-9fd9-ae6095e93331","type":"Circle"},"selection_glyph":null},"id":"197aa248-d428-4b74-9abc-70304cd381af","type":"GlyphRenderer"},{"attributes":{"line_color":{"value":"green"},"line_width":{"value":2},"x0":{"value":0},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"e9801c26-6dda-4e8d-9760-22a56825c582","type":"Segment"},{"attributes":{"callback":null,"factors":["foo","bar","baz"]},"id":"7b9d5c12-f381-42f8-aa8c-e782fb2f7a27","type":"FactorRange"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"9a8c7bd3-800d-4ba6-b7cb-22b1068b2fbe","type":"HoverTool"}]},"id":"ca5d7540-19c9-4beb-8385-e9b1211e9dca","type":"Toolbar"},{"attributes":{},"id":"14376738-4291-4816-b26e-7485b0df55c5","type":"CategoricalTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"a8b5cf3d-e95b-43c1-9fd9-ae6095e93331","type":"Circle"},{"attributes":{"below":[{"id":"b7c92acd-d5be-48fc-bd4c-d21a1bbc6ff7","type":"LinearAxis"}],"left":[{"id":"c264b20d-7304-4407-b5fa-56819fc8573f","type":"CategoricalAxis"}],"renderers":[{"id":"b7c92acd-d5be-48fc-bd4c-d21a1bbc6ff7","type":"LinearAxis"},{"id":"4adf7435-12e0-45eb-bd1b-6a3ad1d27e95","type":"Grid"},{"id":"c264b20d-7304-4407-b5fa-56819fc8573f","type":"CategoricalAxis"},{"id":"f521d9d3-f34f-43c1-bd7d-bbf83551a1bc","type":"Grid"},{"id":"aa92a9f3-43f7-4f25-85a8-3feb3ba85466","type":"GlyphRenderer"},{"id":"197aa248-d428-4b74-9abc-70304cd381af","type":"GlyphRenderer"}],"sizing_mode":"scale_width","title":{"id":"2317b8c7-6ef8-4ceb-8651-ddbf0db27c04","type":"Title"},"tool_events":{"id":"6436aa32-3c36-45bc-9cac-29a90cdf56f8","type":"ToolEvents"},"toolbar":{"id":"50565a46-f6ea-4fcb-ba48-905e41a370e8","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"b6e85061-020a-4cee-853e-cef9ad03dd2f","type":"Range1d"},"y_range":{"id":"3e180152-b315-4635-9973-094f0e8c3f76","type":"FactorRange"}},"id":"a99e126d-6578-41b9-9c67-a391bdf7a85f","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"449f100b-588a-4bf4-8705-cd86b65fc52b","type":"BasicTickFormatter"},"plot":{"id":"a99e126d-6578-41b9-9c67-a391bdf7a85f","subtype":"Figure","type":"Plot"},"ticker":{"id":"00a93202-fc73-4924-8268-8bca093a57f0","type":"BasicTicker"}},"id":"b7c92acd-d5be-48fc-bd4c-d21a1bbc6ff7","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"a99e126d-6578-41b9-9c67-a391bdf7a85f","subtype":"Figure","type":"Plot"},"ticker":{"id":"7cf74a7c-b7ad-4cb1-a1b0-2fef04bce849","type":"CategoricalTicker"}},"id":"f521d9d3-f34f-43c1-bd7d-bbf83551a1bc","type":"Grid"},{"attributes":{"callback":null,"plot":{"id":"5fd2cfbc-ff70-452c-bacb-decdce737b6f","subtype":"Figure","type":"Plot"}},"id":"9a8c7bd3-800d-4ba6-b7cb-22b1068b2fbe","type":"HoverTool"},{"attributes":{"callback":null,"factors":["a","b","c","d","e","f","g","h"]},"id":"3e180152-b315-4635-9973-094f0e8c3f76","type":"FactorRange"},{"attributes":{"formatter":{"id":"7a4fbe36-5ed3-4353-8144-7ec53e06013b","type":"CategoricalTickFormatter"},"plot":{"id":"5fd2cfbc-ff70-452c-bacb-decdce737b6f","subtype":"Figure","type":"Plot"},"ticker":{"id":"1e45e031-4bea-4db0-b912-9253636ad363","type":"CategoricalTicker"}},"id":"985723be-d778-4b74-a300-212f12889d69","type":"CategoricalAxis"},{"attributes":{"callback":null,"factors":["foo","bar","baz"]},"id":"7ea59ed0-0f38-4ea9-b696-7c50d29e52e2","type":"FactorRange"},{"attributes":{"data_source":{"id":"de28d0ea-b830-49b5-a211-2c35863b7a85","type":"ColumnDataSource"},"glyph":{"id":"e9801c26-6dda-4e8d-9760-22a56825c582","type":"Segment"},"hover_glyph":null,"nonselection_glyph":{"id":"3c42ffd2-46ee-42cc-8616-6c337e7f25b6","type":"Segment"},"selection_glyph":null},"id":"aa92a9f3-43f7-4f25-85a8-3feb3ba85466","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":100},"id":"b6e85061-020a-4cee-853e-cef9ad03dd2f","type":"Range1d"},{"attributes":{},"id":"00a93202-fc73-4924-8268-8bca093a57f0","type":"BasicTicker"},{"attributes":{},"id":"435b3a0c-2e7f-4879-8cd2-f8762f6105b7","type":"CategoricalTicker"},{"attributes":{},"id":"b89bc180-4b99-47fd-a56e-e0823d91f877","type":"ToolEvents"},{"attributes":{"below":[{"id":"bdbfcdef-da1e-4b4a-92bf-daaa9b0ff793","type":"CategoricalAxis"}],"left":[{"id":"985723be-d778-4b74-a300-212f12889d69","type":"CategoricalAxis"}],"renderers":[{"id":"bdbfcdef-da1e-4b4a-92bf-daaa9b0ff793","type":"CategoricalAxis"},{"id":"7808efe3-0979-4974-ada9-186570c8b116","type":"Grid"},{"id":"985723be-d778-4b74-a300-212f12889d69","type":"CategoricalAxis"},{"id":"f063469d-a98e-4f20-9433-11c1ddb4d2ea","type":"Grid"},{"id":"7a8ac74d-b10a-4de4-afca-374cb534e110","type":"GlyphRenderer"}],"sizing_mode":"scale_width","title":{"id":"597b49d7-806b-4586-803f-4ee67424b2e8","type":"Title"},"tool_events":{"id":"b89bc180-4b99-47fd-a56e-e0823d91f877","type":"ToolEvents"},"toolbar":{"id":"ca5d7540-19c9-4beb-8385-e9b1211e9dca","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"7ea59ed0-0f38-4ea9-b696-7c50d29e52e2","type":"FactorRange"},"y_range":{"id":"7b9d5c12-f381-42f8-aa8c-e782fb2f7a27","type":"FactorRange"}},"id":"5fd2cfbc-ff70-452c-bacb-decdce737b6f","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"column_names":["x","y","line_color","fill_color"],"data":{"fill_color":["#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B"],"line_color":["#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B"],"x":["foo","foo","foo","bar","bar","bar","baz","baz","baz"],"y":["foo","bar","baz","foo","bar","baz","foo","bar","baz"]}},"id":"d77b55e2-6b8e-4c10-bed4-ec109fff753d","type":"ColumnDataSource"},{"attributes":{},"id":"6436aa32-3c36-45bc-9cac-29a90cdf56f8","type":"ToolEvents"},{"attributes":{"data_source":{"id":"d77b55e2-6b8e-4c10-bed4-ec109fff753d","type":"ColumnDataSource"},"glyph":{"id":"2d9c667c-8e61-420b-b8fd-aad05eb30059","type":"Rect"},"hover_glyph":null,"nonselection_glyph":{"id":"ef6bd687-eeb6-47d5-8604-a5f1200af5ab","type":"Rect"},"selection_glyph":null},"id":"7a8ac74d-b10a-4de4-afca-374cb534e110","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":"Categorical Dot Plot"},"id":"2317b8c7-6ef8-4ceb-8651-ddbf0db27c04","type":"Title"},{"attributes":{"plot":null,"text":"Categorical Heatmap"},"id":"597b49d7-806b-4586-803f-4ee67424b2e8","type":"Title"},{"attributes":{"callback":null,"column_names":["y0","x1","y1"],"data":{"x1":[50,40,65,10,25,37,80,60],"y0":["a","b","c","d","e","f","g","h"],"y1":["a","b","c","d","e","f","g","h"]}},"id":"de28d0ea-b830-49b5-a211-2c35863b7a85","type":"ColumnDataSource"},{"attributes":{},"id":"7cf74a7c-b7ad-4cb1-a1b0-2fef04bce849","type":"CategoricalTicker"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x0":{"value":0},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"3c42ffd2-46ee-42cc-8616-6c337e7f25b6","type":"Segment"},{"attributes":{},"id":"1e45e031-4bea-4db0-b912-9253636ad363","type":"CategoricalTicker"},{"attributes":{"plot":{"id":"a99e126d-6578-41b9-9c67-a391bdf7a85f","subtype":"Figure","type":"Plot"},"ticker":{"id":"00a93202-fc73-4924-8268-8bca093a57f0","type":"BasicTicker"}},"id":"4adf7435-12e0-45eb-bd1b-6a3ad1d27e95","type":"Grid"}],"root_ids":["974981d1-9164-4a43-9aed-df3436d9c80e"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"7c4a7e67-210b-447a-8810-8c1bd6878703","elementid":"12a72b3b-1f92-4d0e-a074-65a1ac627b29","modelid":"974981d1-9164-4a43-9aed-df3436d9c80e"}];
                
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
