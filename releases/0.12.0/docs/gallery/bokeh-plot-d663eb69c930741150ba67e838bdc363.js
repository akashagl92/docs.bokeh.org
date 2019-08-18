document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined") {
        window._bokeh_onload_callbacks = [];
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
      };var element = document.getElementById("bc66ae0b-4066-4549-b484-b9b74c0c1e13");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'bc66ae0b-4066-4549-b484-b9b74c0c1e13' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.0.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"92c7a29d-f533-4d3c-b36a-6c1ebde2366c":{"roots":{"references":[{"attributes":{"callback":null,"factors":["a","b","c","d","e","f","g","h"]},"id":"d16fb97b-82d4-4903-b264-048f62be81b0","type":"FactorRange"},{"attributes":{},"id":"761efe07-8a43-4b7e-adb9-a72eda26d303","type":"CategoricalTicker"},{"attributes":{"dimension":1,"plot":{"id":"9c8c3e0b-efaa-4cf1-91ad-3b57b4bcc139","subtype":"Figure","type":"Plot"},"ticker":{"id":"df8b2c23-13f1-4d90-aec9-c1a671f53b05","type":"CategoricalTicker"}},"id":"53708ca3-3b53-43e6-8af3-98eb1f31bf76","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"60892217-7908-433e-9a2a-c552c721e7f7","type":"Circle"},{"attributes":{"plot":null,"text":"Categorical Heatmap"},"id":"410153fb-7e85-4640-b984-2701423fdbca","type":"Title"},{"attributes":{"formatter":{"id":"19bc39c6-a9eb-4342-896c-83a81b1e86d6","type":"CategoricalTickFormatter"},"plot":{"id":"9c8c3e0b-efaa-4cf1-91ad-3b57b4bcc139","subtype":"Figure","type":"Plot"},"ticker":{"id":"df8b2c23-13f1-4d90-aec9-c1a671f53b05","type":"CategoricalTicker"}},"id":"86487fb1-4f4a-4c3d-b623-ef88dcadad30","type":"CategoricalAxis"},{"attributes":{},"id":"47500252-207d-422f-989c-cb57e220f197","type":"ToolEvents"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[50,40,65,10,25,37,80,60],"y":["a","b","c","d","e","f","g","h"]}},"id":"b9158c33-f559-419a-b1c3-beade1fd84a1","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"ce7e09ea-e5ad-41cb-a633-f1e441ff0222","subtype":"Figure","type":"Plot"},"ticker":{"id":"df7fedea-3032-4f42-bcbe-49a5886b6ac1","type":"CategoricalTicker"}},"id":"17028f72-6be4-459c-8727-ee0e21c8a156","type":"Grid"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"8f70640f-bde6-4e7b-9c6f-350abbc8877a","type":"Toolbar"},{"attributes":{},"id":"eec36ffd-36ba-45a8-bfee-c7eb4fb9b5fa","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"5e28123f-972d-4113-9ec4-18165182f72f","type":"HoverTool"}]},"id":"6106abd4-4077-4619-b69a-caeb37aeb446","type":"Toolbar"},{"attributes":{"plot":{"id":"9c8c3e0b-efaa-4cf1-91ad-3b57b4bcc139","subtype":"Figure","type":"Plot"},"ticker":{"id":"761efe07-8a43-4b7e-adb9-a72eda26d303","type":"CategoricalTicker"}},"id":"6b46422b-425e-462c-ab8f-acc1d17d5a77","type":"Grid"},{"attributes":{"data_source":{"id":"48dbd623-59bb-480b-81ad-5b330b82e116","type":"ColumnDataSource"},"glyph":{"id":"c53560eb-bb04-4e85-a95f-2057d5ad3183","type":"Segment"},"hover_glyph":null,"nonselection_glyph":{"id":"2ff9fc86-751b-4679-bd59-54fc404fa043","type":"Segment"},"selection_glyph":null},"id":"99c9ac52-0472-4b95-b39f-5736d23c8df4","type":"GlyphRenderer"},{"attributes":{"fill_color":{"field":"fill_color"},"height":{"units":"data","value":1},"line_color":{"field":"line_color"},"width":{"units":"data","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"1119e6d4-f330-4f81-9d9b-2d35eb3c4d4d","type":"Rect"},{"attributes":{"plot":{"id":"ce7e09ea-e5ad-41cb-a633-f1e441ff0222","subtype":"Figure","type":"Plot"},"ticker":{"id":"eec36ffd-36ba-45a8-bfee-c7eb4fb9b5fa","type":"BasicTicker"}},"id":"9aec32b3-86e4-4df6-bd53-c1ef00c3bce5","type":"Grid"},{"attributes":{"below":[{"id":"dd8fb299-fc6c-4344-a4b2-66b70f16de6a","type":"LinearAxis"}],"left":[{"id":"7c8d5d59-35b5-4172-8f65-991c7835b8c5","type":"CategoricalAxis"}],"renderers":[{"id":"dd8fb299-fc6c-4344-a4b2-66b70f16de6a","type":"LinearAxis"},{"id":"9aec32b3-86e4-4df6-bd53-c1ef00c3bce5","type":"Grid"},{"id":"7c8d5d59-35b5-4172-8f65-991c7835b8c5","type":"CategoricalAxis"},{"id":"17028f72-6be4-459c-8727-ee0e21c8a156","type":"Grid"},{"id":"99c9ac52-0472-4b95-b39f-5736d23c8df4","type":"GlyphRenderer"},{"id":"00712ca0-6c80-4c88-93fe-6399f0866ff6","type":"GlyphRenderer"}],"sizing_mode":"scale_width","title":{"id":"60416d82-51f9-4a8e-b395-da7bc44b9e88","type":"Title"},"tool_events":{"id":"47500252-207d-422f-989c-cb57e220f197","type":"ToolEvents"},"toolbar":{"id":"8f70640f-bde6-4e7b-9c6f-350abbc8877a","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"6cb71696-0a86-4747-bbb3-54ba5fe1f50c","type":"Range1d"},"y_range":{"id":"d16fb97b-82d4-4903-b264-048f62be81b0","type":"FactorRange"}},"id":"ce7e09ea-e5ad-41cb-a633-f1e441ff0222","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"5717fe72-f46c-4941-8de6-7b887b272e89","type":"Rect"},{"attributes":{"line_color":{"value":"green"},"line_width":{"value":2},"x0":{"value":0},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"c53560eb-bb04-4e85-a95f-2057d5ad3183","type":"Segment"},{"attributes":{"formatter":{"id":"babf0be9-ccf5-4a2e-a6d7-6f439f535179","type":"CategoricalTickFormatter"},"plot":{"id":"9c8c3e0b-efaa-4cf1-91ad-3b57b4bcc139","subtype":"Figure","type":"Plot"},"ticker":{"id":"761efe07-8a43-4b7e-adb9-a72eda26d303","type":"CategoricalTicker"}},"id":"56de9125-0be2-426e-b006-9614f5712e11","type":"CategoricalAxis"},{"attributes":{},"id":"df7fedea-3032-4f42-bcbe-49a5886b6ac1","type":"CategoricalTicker"},{"attributes":{},"id":"bf971e3a-3fb1-4fbe-8880-75f13a8e1bae","type":"ToolEvents"},{"attributes":{"formatter":{"id":"ef1ba575-a90d-4a5f-b783-a576db4cd173","type":"BasicTickFormatter"},"plot":{"id":"ce7e09ea-e5ad-41cb-a633-f1e441ff0222","subtype":"Figure","type":"Plot"},"ticker":{"id":"eec36ffd-36ba-45a8-bfee-c7eb4fb9b5fa","type":"BasicTicker"}},"id":"dd8fb299-fc6c-4344-a4b2-66b70f16de6a","type":"LinearAxis"},{"attributes":{},"id":"810c8506-8ba1-4ac3-a95a-5d47c8b0ae33","type":"CategoricalTickFormatter"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x0":{"value":0},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"2ff9fc86-751b-4679-bd59-54fc404fa043","type":"Segment"},{"attributes":{"callback":null,"end":100},"id":"6cb71696-0a86-4747-bbb3-54ba5fe1f50c","type":"Range1d"},{"attributes":{},"id":"babf0be9-ccf5-4a2e-a6d7-6f439f535179","type":"CategoricalTickFormatter"},{"attributes":{"plot":null,"text":"Catgorical Dot Plot"},"id":"60416d82-51f9-4a8e-b395-da7bc44b9e88","type":"Title"},{"attributes":{"callback":null,"column_names":["y1","y0","x1"],"data":{"x1":[50,40,65,10,25,37,80,60],"y0":["a","b","c","d","e","f","g","h"],"y1":["a","b","c","d","e","f","g","h"]}},"id":"48dbd623-59bb-480b-81ad-5b330b82e116","type":"ColumnDataSource"},{"attributes":{"callback":null,"factors":["foo","bar","baz"]},"id":"74707d51-4d04-4072-84f4-b4c16885a871","type":"FactorRange"},{"attributes":{"callback":null,"factors":["foo","bar","baz"]},"id":"20e3e2f1-cca7-42e6-b42f-e14b66389b16","type":"FactorRange"},{"attributes":{},"id":"19bc39c6-a9eb-4342-896c-83a81b1e86d6","type":"CategoricalTickFormatter"},{"attributes":{},"id":"df8b2c23-13f1-4d90-aec9-c1a671f53b05","type":"CategoricalTicker"},{"attributes":{"formatter":{"id":"810c8506-8ba1-4ac3-a95a-5d47c8b0ae33","type":"CategoricalTickFormatter"},"plot":{"id":"ce7e09ea-e5ad-41cb-a633-f1e441ff0222","subtype":"Figure","type":"Plot"},"ticker":{"id":"df7fedea-3032-4f42-bcbe-49a5886b6ac1","type":"CategoricalTicker"}},"id":"7c8d5d59-35b5-4172-8f65-991c7835b8c5","type":"CategoricalAxis"},{"attributes":{"children":[{"id":"9c8c3e0b-efaa-4cf1-91ad-3b57b4bcc139","subtype":"Figure","type":"Plot"},{"id":"ce7e09ea-e5ad-41cb-a633-f1e441ff0222","subtype":"Figure","type":"Plot"}],"sizing_mode":"scale_width"},"id":"ad1055c0-d9c9-40f5-99df-1ca8bbe84fe1","type":"Row"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"green"},"line_width":{"value":3},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"a339fd18-0870-4baa-8945-976ac39604be","type":"Circle"},{"attributes":{},"id":"ef1ba575-a90d-4a5f-b783-a576db4cd173","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"b9158c33-f559-419a-b1c3-beade1fd84a1","type":"ColumnDataSource"},"glyph":{"id":"a339fd18-0870-4baa-8945-976ac39604be","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"60892217-7908-433e-9a2a-c552c721e7f7","type":"Circle"},"selection_glyph":null},"id":"00712ca0-6c80-4c88-93fe-6399f0866ff6","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y","line_color","fill_color"],"data":{"fill_color":["#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B"],"line_color":["#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B"],"x":["foo","foo","foo","bar","bar","bar","baz","baz","baz"],"y":["foo","bar","baz","foo","bar","baz","foo","bar","baz"]}},"id":"2aa412a7-e260-415a-9470-c85b499187e7","type":"ColumnDataSource"},{"attributes":{"callback":null,"plot":{"id":"9c8c3e0b-efaa-4cf1-91ad-3b57b4bcc139","subtype":"Figure","type":"Plot"}},"id":"5e28123f-972d-4113-9ec4-18165182f72f","type":"HoverTool"},{"attributes":{"below":[{"id":"56de9125-0be2-426e-b006-9614f5712e11","type":"CategoricalAxis"}],"left":[{"id":"86487fb1-4f4a-4c3d-b623-ef88dcadad30","type":"CategoricalAxis"}],"renderers":[{"id":"56de9125-0be2-426e-b006-9614f5712e11","type":"CategoricalAxis"},{"id":"6b46422b-425e-462c-ab8f-acc1d17d5a77","type":"Grid"},{"id":"86487fb1-4f4a-4c3d-b623-ef88dcadad30","type":"CategoricalAxis"},{"id":"53708ca3-3b53-43e6-8af3-98eb1f31bf76","type":"Grid"},{"id":"28d7532b-4d25-49da-b257-5e93b89d67f6","type":"GlyphRenderer"}],"sizing_mode":"scale_width","title":{"id":"410153fb-7e85-4640-b984-2701423fdbca","type":"Title"},"tool_events":{"id":"bf971e3a-3fb1-4fbe-8880-75f13a8e1bae","type":"ToolEvents"},"toolbar":{"id":"6106abd4-4077-4619-b69a-caeb37aeb446","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"74707d51-4d04-4072-84f4-b4c16885a871","type":"FactorRange"},"y_range":{"id":"20e3e2f1-cca7-42e6-b42f-e14b66389b16","type":"FactorRange"}},"id":"9c8c3e0b-efaa-4cf1-91ad-3b57b4bcc139","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"2aa412a7-e260-415a-9470-c85b499187e7","type":"ColumnDataSource"},"glyph":{"id":"1119e6d4-f330-4f81-9d9b-2d35eb3c4d4d","type":"Rect"},"hover_glyph":null,"nonselection_glyph":{"id":"5717fe72-f46c-4941-8de6-7b887b272e89","type":"Rect"},"selection_glyph":null},"id":"28d7532b-4d25-49da-b257-5e93b89d67f6","type":"GlyphRenderer"}],"root_ids":["ad1055c0-d9c9-40f5-99df-1ca8bbe84fe1"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"92c7a29d-f533-4d3c-b36a-6c1ebde2366c","elementid":"bc66ae0b-4066-4549-b484-b9b74c0c1e13","modelid":"ad1055c0-d9c9-40f5-99df-1ca8bbe84fe1"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
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