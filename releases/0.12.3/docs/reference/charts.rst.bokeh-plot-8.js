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
      };var element = document.getElementById("ad111855-b96a-49d4-a386-27ae876982d0");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ad111855-b96a-49d4-a386-27ae876982d0' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"7bfa7157-b391-40cd-bd4e-af255dfd2dac":{"roots":{"references":[{"attributes":{"plot":{"id":"689fd4b0-4922-40a3-959d-587f06a0306a","subtype":"Chart","type":"Plot"},"ticker":{"id":"e50d1c2e-425a-4319-83ce-7db0755091b9","type":"BasicTicker"}},"id":"a1cbe83d-0f86-4b88-a240-78cd1ee9e0f8","type":"Grid"},{"attributes":{"plot":{"id":"689fd4b0-4922-40a3-959d-587f06a0306a","subtype":"Chart","type":"Plot"}},"id":"413feffa-bfb5-4aee-aa17-f9219f09c974","type":"WheelZoomTool"},{"attributes":{"plot":null,"text":"line"},"id":"ab941828-c54d-499a-b4c7-bdb0eceabaf7","type":"Title"},{"attributes":{"below":[{"id":"ba216e48-e67e-430a-900d-5277fc03eaa8","type":"LinearAxis"}],"height":400,"left":[{"id":"7be5385b-7a68-487c-bb19-4f3a7d1d4170","type":"LinearAxis"}],"renderers":[{"id":"6b8872ac-12cd-4392-a471-88c836f49db9","type":"BoxAnnotation"},{"id":"90ac19b9-2125-467e-9928-83cf8f3530af","type":"GlyphRenderer"},{"id":"9bc9c23b-12b8-4dfb-a8f9-035de6826868","type":"GlyphRenderer"},{"id":"06362b62-2a61-4857-b08e-75f9a895c778","type":"GlyphRenderer"},{"id":"660128ba-7241-4cc7-9dde-4547528f85d6","type":"Legend"},{"id":"ba216e48-e67e-430a-900d-5277fc03eaa8","type":"LinearAxis"},{"id":"7be5385b-7a68-487c-bb19-4f3a7d1d4170","type":"LinearAxis"},{"id":"a1cbe83d-0f86-4b88-a240-78cd1ee9e0f8","type":"Grid"},{"id":"dbf95f8b-3359-4061-804b-86dd2f80c66a","type":"Grid"}],"title":{"id":"ab941828-c54d-499a-b4c7-bdb0eceabaf7","type":"Title"},"tool_events":{"id":"a122ca87-d7cc-449f-bb96-fd67672dfd67","type":"ToolEvents"},"toolbar":{"id":"60b38fa2-735d-4583-981b-333e5220524a","type":"Toolbar"},"width":400,"x_mapper_type":"auto","x_range":{"id":"9135d2c7-40b2-43b5-8bf8-7e7f7a06c37c","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"4ea36c78-be78-43d7-91ba-4689a3f5290a","type":"Range1d"}},"id":"689fd4b0-4922-40a3-959d-587f06a0306a","subtype":"Chart","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"6b8872ac-12cd-4392-a471-88c836f49db9","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"689fd4b0-4922-40a3-959d-587f06a0306a","subtype":"Chart","type":"Plot"}},"id":"916aae8c-19ae-42cf-843e-2d3781f787ba","type":"ResetTool"},{"attributes":{"plot":{"id":"689fd4b0-4922-40a3-959d-587f06a0306a","subtype":"Chart","type":"Plot"}},"id":"dae4d0a6-c8bb-431f-9a48-ba3df05ea77c","type":"PanTool"},{"attributes":{"plot":{"id":"689fd4b0-4922-40a3-959d-587f06a0306a","subtype":"Chart","type":"Plot"}},"id":"748deace-7e1f-47e0-8d7a-df28d923e188","type":"SaveTool"},{"attributes":{"line_color":{"value":"#f22c40"},"line_width":{"value":2},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"0d2689a3-dd36-42ec-9f98-2d65581e75bb","type":"Line"},{"attributes":{},"id":"319baffc-b25f-4a56-9128-367cb43376a8","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"689fd4b0-4922-40a3-959d-587f06a0306a","subtype":"Chart","type":"Plot"}},"id":"cf0bb2e9-b943-4f40-bcac-e50ddb6eac9d","type":"HelpTool"},{"attributes":{},"id":"a122ca87-d7cc-449f-bb96-fd67672dfd67","type":"ToolEvents"},{"attributes":{"label":{"value":"b"},"renderers":[{"id":"9bc9c23b-12b8-4dfb-a8f9-035de6826868","type":"GlyphRenderer"}]},"id":"c1e063ed-f356-475d-8413-994cf45af842","type":"LegendItem"},{"attributes":{"axis_label":"index","formatter":{"id":"994d8c7f-b0bf-4f52-a710-a229d32904c0","type":"BasicTickFormatter"},"plot":{"id":"689fd4b0-4922-40a3-959d-587f06a0306a","subtype":"Chart","type":"Plot"},"ticker":{"id":"e50d1c2e-425a-4319-83ce-7db0755091b9","type":"BasicTicker"}},"id":"ba216e48-e67e-430a-900d-5277fc03eaa8","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"689fd4b0-4922-40a3-959d-587f06a0306a","subtype":"Chart","type":"Plot"},"ticker":{"id":"97c1026d-9604-4ea1-b139-675b21a15cc5","type":"BasicTicker"}},"id":"dbf95f8b-3359-4061-804b-86dd2f80c66a","type":"Grid"},{"attributes":{"axis_label":"Languages","formatter":{"id":"319baffc-b25f-4a56-9128-367cb43376a8","type":"BasicTickFormatter"},"plot":{"id":"689fd4b0-4922-40a3-959d-587f06a0306a","subtype":"Chart","type":"Plot"},"ticker":{"id":"97c1026d-9604-4ea1-b139-675b21a15cc5","type":"BasicTicker"}},"id":"7be5385b-7a68-487c-bb19-4f3a7d1d4170","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"series":"b"},{"series":"b"},{"series":"b"},{"series":"b"},{"series":"b"}],"series":["b","b","b","b","b"],"x_values":[0,1,2,3,4],"y_values":[12,33,47,15,126]}},"id":"db8cff3b-0d07-404a-8c87-0471b304a6b1","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"series":"a"},{"series":"a"},{"series":"a"},{"series":"a"},{"series":"a"}],"series":["a","a","a","a","a"],"x_values":[0,1,2,3,4],"y_values":[2,3,7,5,26]}},"id":"f9efd00b-ae5b-4129-846b-aab92d46ac8f","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"dae4d0a6-c8bb-431f-9a48-ba3df05ea77c","type":"PanTool"},{"id":"413feffa-bfb5-4aee-aa17-f9219f09c974","type":"WheelZoomTool"},{"id":"1aa00852-a805-4bb9-8e05-65d447533932","type":"BoxZoomTool"},{"id":"748deace-7e1f-47e0-8d7a-df28d923e188","type":"SaveTool"},{"id":"916aae8c-19ae-42cf-843e-2d3781f787ba","type":"ResetTool"},{"id":"cf0bb2e9-b943-4f40-bcac-e50ddb6eac9d","type":"HelpTool"}]},"id":"60b38fa2-735d-4583-981b-333e5220524a","type":"Toolbar"},{"attributes":{"callback":null,"end":138.4,"start":-10.4},"id":"4ea36c78-be78-43d7-91ba-4689a3f5290a","type":"Range1d"},{"attributes":{"overlay":{"id":"6b8872ac-12cd-4392-a471-88c836f49db9","type":"BoxAnnotation"},"plot":{"id":"689fd4b0-4922-40a3-959d-587f06a0306a","subtype":"Chart","type":"Plot"}},"id":"1aa00852-a805-4bb9-8e05-65d447533932","type":"BoxZoomTool"},{"attributes":{"label":{"value":"a"},"renderers":[{"id":"90ac19b9-2125-467e-9928-83cf8f3530af","type":"GlyphRenderer"}]},"id":"7e859357-60ff-4267-b021-2e35a487d1b0","type":"LegendItem"},{"attributes":{"line_color":{"value":"#407ee7"},"line_width":{"value":2},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"4bf1c885-dd47-4509-a0f6-490ce15640be","type":"Line"},{"attributes":{"items":[{"id":"7e859357-60ff-4267-b021-2e35a487d1b0","type":"LegendItem"},{"id":"c1e063ed-f356-475d-8413-994cf45af842","type":"LegendItem"},{"id":"305026a2-0c90-40e3-b96a-e0ef93b1714b","type":"LegendItem"}],"location":"top_left","plot":{"id":"689fd4b0-4922-40a3-959d-587f06a0306a","subtype":"Chart","type":"Plot"}},"id":"660128ba-7241-4cc7-9dde-4547528f85d6","type":"Legend"},{"attributes":{"label":{"value":"c"},"renderers":[{"id":"06362b62-2a61-4857-b08e-75f9a895c778","type":"GlyphRenderer"}]},"id":"305026a2-0c90-40e3-b96a-e0ef93b1714b","type":"LegendItem"},{"attributes":{},"id":"e50d1c2e-425a-4319-83ce-7db0755091b9","type":"BasicTicker"},{"attributes":{},"id":"994d8c7f-b0bf-4f52-a710-a229d32904c0","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"db8cff3b-0d07-404a-8c87-0471b304a6b1","type":"ColumnDataSource"},"glyph":{"id":"a16215cc-23e7-4381-96dc-29a6b3b74143","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"9bc9c23b-12b8-4dfb-a8f9-035de6826868","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":4.4,"start":-0.4},"id":"9135d2c7-40b2-43b5-8bf8-7e7f7a06c37c","type":"Range1d"},{"attributes":{"data_source":{"id":"f9efd00b-ae5b-4129-846b-aab92d46ac8f","type":"ColumnDataSource"},"glyph":{"id":"0d2689a3-dd36-42ec-9f98-2d65581e75bb","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"90ac19b9-2125-467e-9928-83cf8f3530af","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"series":"c"},{"series":"c"},{"series":"c"},{"series":"c"},{"series":"c"}],"series":["c","c","c","c","c"],"x_values":[0,1,2,3,4],"y_values":[22,43,10,25,26]}},"id":"98434423-a9e8-4d7e-9941-9a399cea48bf","type":"ColumnDataSource"},{"attributes":{"line_color":{"value":"#5ab738"},"line_width":{"value":2},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"a16215cc-23e7-4381-96dc-29a6b3b74143","type":"Line"},{"attributes":{},"id":"97c1026d-9604-4ea1-b139-675b21a15cc5","type":"BasicTicker"},{"attributes":{"data_source":{"id":"98434423-a9e8-4d7e-9941-9a399cea48bf","type":"ColumnDataSource"},"glyph":{"id":"4bf1c885-dd47-4509-a0f6-490ce15640be","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"06362b62-2a61-4857-b08e-75f9a895c778","type":"GlyphRenderer"}],"root_ids":["689fd4b0-4922-40a3-959d-587f06a0306a"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"7bfa7157-b391-40cd-bd4e-af255dfd2dac","elementid":"ad111855-b96a-49d4-a386-27ae876982d0","modelid":"689fd4b0-4922-40a3-959d-587f06a0306a"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
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