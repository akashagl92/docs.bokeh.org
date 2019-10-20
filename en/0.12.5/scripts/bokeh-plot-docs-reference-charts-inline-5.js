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
      };var element = document.getElementById("c2856b0b-9238-46b8-aa73-f469bc6c94a5");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c2856b0b-9238-46b8-aa73-f469bc6c94a5' but no matching script tag was found. ")
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
                var docs_json = {"e42cc5cf-876d-4bde-8aaa-71c795e78c58":{"roots":{"references":[{"attributes":{"axis_label":"fruit","formatter":{"id":"613f38f1-489e-4112-90e3-ec39501696c4","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"7762fe25-09b6-40f2-8c28-5a6debbfa8f7","subtype":"Chart","type":"Plot"},"ticker":{"id":"61838a57-13fb-4869-8260-dc532ca4dd3c","type":"CategoricalTicker"}},"id":"722febf8-41d1-47b3-8da2-e76a8dd7226a","type":"CategoricalAxis"},{"attributes":{"label":{"value":"(5.7, 6.8]"},"renderers":[{"id":"fca6578b-09d2-4884-928d-079ff7a402eb","type":"GlyphRenderer"}]},"id":"54704787-3165-4523-802f-bd15513f90c0","type":"LegendItem"},{"attributes":{"below":[{"id":"722febf8-41d1-47b3-8da2-e76a8dd7226a","type":"CategoricalAxis"}],"css_classes":null,"height":400,"left":[{"id":"30d80da7-b12a-4307-9c5f-b8a0b4aecc16","type":"LinearAxis"}],"renderers":[{"id":"9c2c3070-af0b-424d-b8a2-4a38bf1fa145","type":"BoxAnnotation"},{"id":"249b9b07-2054-4951-a4c1-f400785127fb","type":"GlyphRenderer"},{"id":"fca6578b-09d2-4884-928d-079ff7a402eb","type":"GlyphRenderer"},{"id":"f653ee46-7841-4d2b-b74e-3e794dd2cc06","type":"GlyphRenderer"},{"id":"67e5a789-7aa8-4fdc-bce6-273d7a553f65","type":"GlyphRenderer"},{"id":"d0fe1f75-28e6-439e-849c-ea44e3e8d49f","type":"GlyphRenderer"},{"id":"86ab2486-d6b7-46a3-b7ae-6968ae7ef98c","type":"Legend"},{"id":"722febf8-41d1-47b3-8da2-e76a8dd7226a","type":"CategoricalAxis"},{"id":"30d80da7-b12a-4307-9c5f-b8a0b4aecc16","type":"LinearAxis"}],"title":{"id":"c4697cd4-5f83-4574-a8ef-9405bfe01332","type":"Title"},"tool_events":{"id":"cf9170e4-faa7-4a14-bcf1-7c9b865eec95","type":"ToolEvents"},"toolbar":{"id":"dc238099-83e3-4744-be8c-65484eb952fe","type":"Toolbar"},"width":400,"x_mapper_type":"auto","x_range":{"id":"4d697633-ed94-4dd0-8f94-b120bae44dd4","type":"FactorRange"},"y_mapper_type":"auto","y_range":{"id":"5c4d5300-5c3f-485d-9877-3deb8bbfe76b","type":"Range1d"}},"id":"7762fe25-09b6-40f2-8c28-5a6debbfa8f7","subtype":"Chart","type":"Plot"},{"attributes":{"dilate":true,"fill_color":{"value":"#3182bd"},"height":{"units":"data","value":0.95},"line_color":{"value":"#3182bd"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"4e7d34a4-384f-4581-a6c7-dacf44505e32","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#08519c"},"height":{"units":"data","value":0.95},"line_color":{"value":"#08519c"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"80f4e70d-5a43-4f64-8b96-4ed94093fbb9","type":"Rect"},{"attributes":{"plot":{"id":"7762fe25-09b6-40f2-8c28-5a6debbfa8f7","subtype":"Chart","type":"Plot"}},"id":"8dfa3321-edf9-4b06-bb51-a1c5508b3b9a","type":"ResetTool"},{"attributes":{"plot":{"id":"7762fe25-09b6-40f2-8c28-5a6debbfa8f7","subtype":"Chart","type":"Plot"}},"id":"df3c4032-6231-4ac0-867b-d060652f7f99","type":"PanTool"},{"attributes":{},"id":"934149c0-d1d7-4939-824c-c02a0adaef71","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"7762fe25-09b6-40f2-8c28-5a6debbfa8f7","subtype":"Chart","type":"Plot"}},"id":"92e76109-6b04-4e05-983f-435a13230feb","type":"SaveTool"},{"attributes":{"plot":null,"text":"Fruits"},"id":"c4697cd4-5f83-4574-a8ef-9405bfe01332","type":"Title"},{"attributes":{},"id":"61838a57-13fb-4869-8260-dc532ca4dd3c","type":"CategoricalTicker"},{"attributes":{},"id":"b1f427bb-ca96-4178-a559-967699559c66","type":"BasicTicker"},{"attributes":{"data_source":{"id":"1dc793b6-13f2-48df-b9d0-7aec78366377","type":"ColumnDataSource"},"glyph":{"id":"80f4e70d-5a43-4f64-8b96-4ed94093fbb9","type":"Rect"},"hover_glyph":null,"muted_glyph":null},"id":"249b9b07-2054-4951-a4c1-f400785127fb","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#c6dbef"},"height":{"units":"data","value":0.95},"line_color":{"value":"#c6dbef"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"92497621-44f8-49e2-a88b-ce6de64a4cf6","type":"Rect"},{"attributes":{"data_source":{"id":"e2e3c624-a56e-416c-95d7-2cb6466d9f9f","type":"ColumnDataSource"},"glyph":{"id":"b0946bc4-353d-4114-8f44-8e288f571d36","type":"Rect"},"hover_glyph":null,"muted_glyph":null},"id":"f653ee46-7841-4d2b-b74e-3e794dd2cc06","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"2b065b20-60c2-42fb-9203-5547f76f70c8","type":"ColumnDataSource"},"glyph":{"id":"92497621-44f8-49e2-a88b-ce6de64a4cf6","type":"Rect"},"hover_glyph":null,"muted_glyph":null},"id":"d0fe1f75-28e6-439e-849c-ea44e3e8d49f","type":"GlyphRenderer"},{"attributes":{"items":[{"id":"f3d55b0d-6097-4f9a-bb94-96619a6a5cc6","type":"LegendItem"},{"id":"54704787-3165-4523-802f-bd15513f90c0","type":"LegendItem"},{"id":"d3075bb2-4764-48d7-9ec6-bfdbe9e8e149","type":"LegendItem"},{"id":"b1342415-168d-4076-850d-fdf5d2750091","type":"LegendItem"},{"id":"d8c327b0-533f-4c50-bbb8-d81a8cb4ebeb","type":"LegendItem"}],"location":"top_left","plot":{"id":"7762fe25-09b6-40f2-8c28-5a6debbfa8f7","subtype":"Chart","type":"Plot"}},"id":"86ab2486-d6b7-46a3-b7ae-6968ae7ef98c","type":"Legend"},{"attributes":{"callback":null,"column_names":["x","values","y"],"data":{"chart_index":[{"fruit_count":"(4.5, 5.7]"},{"fruit_count":"(4.5, 5.7]"}],"fruit_count":["(4.5, 5.7]","(4.5, 5.7]"],"values":[5,5],"x":["apples","pears"],"y":[2,2]}},"id":"e2e3c624-a56e-416c-95d7-2cb6466d9f9f","type":"ColumnDataSource"},{"attributes":{"label":{"value":"(6.8, 8]"},"renderers":[{"id":"249b9b07-2054-4951-a4c1-f400785127fb","type":"GlyphRenderer"}]},"id":"f3d55b0d-6097-4f9a-bb94-96619a6a5cc6","type":"LegendItem"},{"attributes":{"label":{"value":"[1, 2.2]"},"renderers":[{"id":"d0fe1f75-28e6-439e-849c-ea44e3e8d49f","type":"GlyphRenderer"}]},"id":"d8c327b0-533f-4c50-bbb8-d81a8cb4ebeb","type":"LegendItem"},{"attributes":{"callback":null,"column_names":["x","values","y"],"data":{"chart_index":[{"fruit_count":"[1, 2.2]"},{"fruit_count":"[1, 2.2]"}],"fruit_count":["[1, 2.2]","[1, 2.2]"],"values":[1,2],"x":["bananas","bananas"],"y":[1,2]}},"id":"2b065b20-60c2-42fb-9203-5547f76f70c8","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"9c2c3070-af0b-424d-b8a2-4a38bf1fa145","type":"BoxAnnotation"},"plot":{"id":"7762fe25-09b6-40f2-8c28-5a6debbfa8f7","subtype":"Chart","type":"Plot"}},"id":"63dd3ef6-4aeb-4a7a-a14e-aaae95eca179","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["x","values","y"],"data":{"chart_index":[{"fruit_count":"(3.3, 4.5]"},{"fruit_count":"(3.3, 4.5]"},{"fruit_count":"(3.3, 4.5]"}],"fruit_count":["(3.3, 4.5]","(3.3, 4.5]","(3.3, 4.5]"],"values":[4,4,4],"x":["apples","bananas","pears"],"y":[1,3,3]}},"id":"32a5dd4e-b8fd-48ee-ae0b-86aea1a4ff58","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"df3c4032-6231-4ac0-867b-d060652f7f99","type":"PanTool"},{"id":"373b9af6-e9f0-48a7-a7a0-ddca749e4122","type":"WheelZoomTool"},{"id":"63dd3ef6-4aeb-4a7a-a14e-aaae95eca179","type":"BoxZoomTool"},{"id":"92e76109-6b04-4e05-983f-435a13230feb","type":"SaveTool"},{"id":"8dfa3321-edf9-4b06-bb51-a1c5508b3b9a","type":"ResetTool"},{"id":"128ef406-5ac8-47c2-a016-6b32547830b1","type":"HelpTool"}]},"id":"dc238099-83e3-4744-be8c-65484eb952fe","type":"Toolbar"},{"attributes":{},"id":"cf9170e4-faa7-4a14-bcf1-7c9b865eec95","type":"ToolEvents"},{"attributes":{"label":{"value":"(4.5, 5.7]"},"renderers":[{"id":"f653ee46-7841-4d2b-b74e-3e794dd2cc06","type":"GlyphRenderer"}]},"id":"d3075bb2-4764-48d7-9ec6-bfdbe9e8e149","type":"LegendItem"},{"attributes":{"data_source":{"id":"32a5dd4e-b8fd-48ee-ae0b-86aea1a4ff58","type":"ColumnDataSource"},"glyph":{"id":"604d9570-1c22-4726-b29a-9560bacecf1c","type":"Rect"},"hover_glyph":null,"muted_glyph":null},"id":"67e5a789-7aa8-4fdc-bce6-273d7a553f65","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":3.77,"start":0.22999999999999998},"id":"5c4d5300-5c3f-485d-9877-3deb8bbfe76b","type":"Range1d"},{"attributes":{"axis_label":"sample","formatter":{"id":"934149c0-d1d7-4939-824c-c02a0adaef71","type":"BasicTickFormatter"},"plot":{"id":"7762fe25-09b6-40f2-8c28-5a6debbfa8f7","subtype":"Chart","type":"Plot"},"ticker":{"id":"b1f427bb-ca96-4178-a559-967699559c66","type":"BasicTicker"}},"id":"30d80da7-b12a-4307-9c5f-b8a0b4aecc16","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"9c2c3070-af0b-424d-b8a2-4a38bf1fa145","type":"BoxAnnotation"},{"attributes":{"dilate":true,"fill_color":{"value":"#6baed6"},"height":{"units":"data","value":0.95},"line_color":{"value":"#6baed6"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"b0946bc4-353d-4114-8f44-8e288f571d36","type":"Rect"},{"attributes":{"plot":{"id":"7762fe25-09b6-40f2-8c28-5a6debbfa8f7","subtype":"Chart","type":"Plot"}},"id":"128ef406-5ac8-47c2-a016-6b32547830b1","type":"HelpTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#9ecae1"},"height":{"units":"data","value":0.95},"line_color":{"value":"#9ecae1"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"604d9570-1c22-4726-b29a-9560bacecf1c","type":"Rect"},{"attributes":{"label":{"value":"(3.3, 4.5]"},"renderers":[{"id":"67e5a789-7aa8-4fdc-bce6-273d7a553f65","type":"GlyphRenderer"}]},"id":"b1342415-168d-4076-850d-fdf5d2750091","type":"LegendItem"},{"attributes":{"callback":null,"column_names":["x","values","y"],"data":{"chart_index":[{"fruit_count":"(6.8, 8]"}],"fruit_count":["(6.8, 8]"],"values":[8],"x":["apples"],"y":[3]}},"id":"1dc793b6-13f2-48df-b9d0-7aec78366377","type":"ColumnDataSource"},{"attributes":{},"id":"613f38f1-489e-4112-90e3-ec39501696c4","type":"CategoricalTickFormatter"},{"attributes":{"data_source":{"id":"872c31fb-433a-46a6-a7c9-34b4cbb777eb","type":"ColumnDataSource"},"glyph":{"id":"4e7d34a4-384f-4581-a6c7-dacf44505e32","type":"Rect"},"hover_glyph":null,"muted_glyph":null},"id":"fca6578b-09d2-4884-928d-079ff7a402eb","type":"GlyphRenderer"},{"attributes":{"callback":null,"factors":["apples","bananas","pears"]},"id":"4d697633-ed94-4dd0-8f94-b120bae44dd4","type":"FactorRange"},{"attributes":{"callback":null,"column_names":["x","values","y"],"data":{"chart_index":[{"fruit_count":"(5.7, 6.8]"}],"fruit_count":["(5.7, 6.8]"],"values":[6],"x":["pears"],"y":[1]}},"id":"872c31fb-433a-46a6-a7c9-34b4cbb777eb","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"7762fe25-09b6-40f2-8c28-5a6debbfa8f7","subtype":"Chart","type":"Plot"}},"id":"373b9af6-e9f0-48a7-a7a0-ddca749e4122","type":"WheelZoomTool"}],"root_ids":["7762fe25-09b6-40f2-8c28-5a6debbfa8f7"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"e42cc5cf-876d-4bde-8aaa-71c795e78c58","elementid":"c2856b0b-9238-46b8-aa73-f469bc6c94a5","modelid":"7762fe25-09b6-40f2-8c28-5a6debbfa8f7"}];
                
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
