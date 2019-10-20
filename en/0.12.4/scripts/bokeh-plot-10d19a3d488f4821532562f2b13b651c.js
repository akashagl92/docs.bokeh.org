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
      };var element = document.getElementById("fa6518d1-6aeb-4d4f-8717-a4ea21cdd02a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'fa6518d1-6aeb-4d4f-8717-a4ea21cdd02a' but no matching script tag was found. ")
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
                var docs_json = {"34c312cf-d997-4711-9aa1-bbf8cd26f839":{"roots":{"references":[{"attributes":{},"id":"635f3eb1-7811-41c6-a4de-d9cf3bf9c4df","type":"ToolEvents"},{"attributes":{"data_source":{"id":"87bc37b0-2ddf-4024-b97c-4937a6e4e351","type":"ColumnDataSource"},"glyph":{"id":"34a809f7-d428-4e54-94b6-96627188f47d","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"889973b3-c5bd-4e43-857b-256af40a7817","type":"Circle"},"selection_glyph":null},"id":"35b73a33-fed3-42cf-a31f-dbc65e721d44","type":"GlyphRenderer"},{"attributes":{},"id":"3cbf3734-3630-42f8-81cd-459f8e1d8cf0","type":"CategoricalTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"889973b3-c5bd-4e43-857b-256af40a7817","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[50,40,65,10,25,37,80,60],"y":["a","b","c","d","e","f","g","h"]}},"id":"87bc37b0-2ddf-4024-b97c-4937a6e4e351","type":"ColumnDataSource"},{"attributes":{},"id":"f95b3ea1-b728-4c30-a7f2-ec45545503bb","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"plot":{"id":"30c090c0-6969-4645-85d0-5dd2a350129a","subtype":"Figure","type":"Plot"}},"id":"a745022a-f730-43ff-9bc1-9f6973b23684","type":"HoverTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"a745022a-f730-43ff-9bc1-9f6973b23684","type":"HoverTool"}]},"id":"f1388ad8-4a1f-4118-a6c6-1973adfb7dfc","type":"Toolbar"},{"attributes":{},"id":"2a31e7d9-86a2-4b34-b0a4-181fb9de64f7","type":"ToolEvents"},{"attributes":{"fill_color":{"field":"fill_color"},"height":{"units":"data","value":1},"line_color":{"field":"line_color"},"width":{"units":"data","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"aca02bec-bd1b-40f3-806f-1159ee084bf9","type":"Rect"},{"attributes":{},"id":"1494de53-bc28-4d75-a2c5-cfa75ca3f272","type":"CategoricalTicker"},{"attributes":{"formatter":{"id":"f95b3ea1-b728-4c30-a7f2-ec45545503bb","type":"CategoricalTickFormatter"},"plot":{"id":"30c090c0-6969-4645-85d0-5dd2a350129a","subtype":"Figure","type":"Plot"},"ticker":{"id":"eb52b049-eef8-4049-9cae-df793632de14","type":"CategoricalTicker"}},"id":"14e187a5-b8e2-4cd1-bd04-06c29d890136","type":"CategoricalAxis"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"4ef7ee91-c876-4de9-8a56-72b72d6d045d","type":"Toolbar"},{"attributes":{"below":[{"id":"14e187a5-b8e2-4cd1-bd04-06c29d890136","type":"CategoricalAxis"}],"left":[{"id":"211d3820-0ba7-4c15-95d2-92b7a3b704f1","type":"CategoricalAxis"}],"renderers":[{"id":"14e187a5-b8e2-4cd1-bd04-06c29d890136","type":"CategoricalAxis"},{"id":"843e86a9-66f8-404f-bfb2-987f15266599","type":"Grid"},{"id":"211d3820-0ba7-4c15-95d2-92b7a3b704f1","type":"CategoricalAxis"},{"id":"ffe1dd9d-0ae4-4352-a2ce-7e819607d453","type":"Grid"},{"id":"47eb8d53-1c01-4d4b-9908-9b8bc8178b16","type":"GlyphRenderer"}],"sizing_mode":"scale_width","title":{"id":"bb878839-bfd8-4965-812c-117333fcde5e","type":"Title"},"tool_events":{"id":"635f3eb1-7811-41c6-a4de-d9cf3bf9c4df","type":"ToolEvents"},"toolbar":{"id":"f1388ad8-4a1f-4118-a6c6-1973adfb7dfc","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"3a6e24bd-608d-4031-9fdd-279416911d14","type":"FactorRange"},"y_range":{"id":"63079eae-b897-4a3e-b900-d6a84ca4ec96","type":"FactorRange"}},"id":"30c090c0-6969-4645-85d0-5dd2a350129a","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"734d763d-a072-4221-b989-e88dc41bc03d","type":"CategoricalTickFormatter"},"plot":{"id":"30c090c0-6969-4645-85d0-5dd2a350129a","subtype":"Figure","type":"Plot"},"ticker":{"id":"675f57e5-3db6-4c29-89e2-99cca2012db7","type":"CategoricalTicker"}},"id":"211d3820-0ba7-4c15-95d2-92b7a3b704f1","type":"CategoricalAxis"},{"attributes":{},"id":"675f57e5-3db6-4c29-89e2-99cca2012db7","type":"CategoricalTicker"},{"attributes":{},"id":"8cc0e98e-201a-48b1-bde0-1887fc5991ac","type":"BasicTicker"},{"attributes":{"callback":null,"factors":["foo","bar","baz"]},"id":"3a6e24bd-608d-4031-9fdd-279416911d14","type":"FactorRange"},{"attributes":{},"id":"14a38da9-57ed-4ffd-9d78-aac39e383bf8","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"green"},"line_width":{"value":3},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"34a809f7-d428-4e54-94b6-96627188f47d","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y","line_color","fill_color"],"data":{"fill_color":["#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B"],"line_color":["#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B"],"x":["foo","foo","foo","bar","bar","bar","baz","baz","baz"],"y":["foo","bar","baz","foo","bar","baz","foo","bar","baz"]}},"id":"0361451b-fc45-499c-9189-1443fbbfd940","type":"ColumnDataSource"},{"attributes":{},"id":"eb52b049-eef8-4049-9cae-df793632de14","type":"CategoricalTicker"},{"attributes":{"data_source":{"id":"f7fde17d-60da-461d-b4a1-d45bb7d391a6","type":"ColumnDataSource"},"glyph":{"id":"4ce4f56a-5b58-4566-b1a3-07620b2ab35f","type":"Segment"},"hover_glyph":null,"nonselection_glyph":{"id":"f6aedbad-689e-4211-ba02-a3543a9a8341","type":"Segment"},"selection_glyph":null},"id":"89571c7d-7ee3-42b2-a6b3-b2597b618c52","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"f668002c-475c-4420-856e-6268b322e5d0","type":"LinearAxis"}],"left":[{"id":"a3b69420-e366-4ba4-a737-5a62ac4248e0","type":"CategoricalAxis"}],"renderers":[{"id":"f668002c-475c-4420-856e-6268b322e5d0","type":"LinearAxis"},{"id":"6511f0f3-93f4-4b83-8ba4-3b17df197d1c","type":"Grid"},{"id":"a3b69420-e366-4ba4-a737-5a62ac4248e0","type":"CategoricalAxis"},{"id":"7940eb58-c826-4eec-b82c-fe246a732dcd","type":"Grid"},{"id":"89571c7d-7ee3-42b2-a6b3-b2597b618c52","type":"GlyphRenderer"},{"id":"35b73a33-fed3-42cf-a31f-dbc65e721d44","type":"GlyphRenderer"}],"sizing_mode":"scale_width","title":{"id":"b4d89c22-62f3-44bc-bafd-f631c4656d3b","type":"Title"},"tool_events":{"id":"2a31e7d9-86a2-4b34-b0a4-181fb9de64f7","type":"ToolEvents"},"toolbar":{"id":"4ef7ee91-c876-4de9-8a56-72b72d6d045d","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"07ef5fad-2ba2-4ccf-9330-61afbc38c4c0","type":"Range1d"},"y_range":{"id":"6b6c6488-528e-46a9-8b4e-6dba0b18ac25","type":"FactorRange"}},"id":"283a00dd-e99a-4eab-bd4b-0cb7a1ca0950","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"30c090c0-6969-4645-85d0-5dd2a350129a","subtype":"Figure","type":"Plot"},"ticker":{"id":"eb52b049-eef8-4049-9cae-df793632de14","type":"CategoricalTicker"}},"id":"843e86a9-66f8-404f-bfb2-987f15266599","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"30c090c0-6969-4645-85d0-5dd2a350129a","subtype":"Figure","type":"Plot"},"ticker":{"id":"675f57e5-3db6-4c29-89e2-99cca2012db7","type":"CategoricalTicker"}},"id":"ffe1dd9d-0ae4-4352-a2ce-7e819607d453","type":"Grid"},{"attributes":{"callback":null,"factors":["a","b","c","d","e","f","g","h"]},"id":"6b6c6488-528e-46a9-8b4e-6dba0b18ac25","type":"FactorRange"},{"attributes":{"callback":null,"factors":["foo","bar","baz"]},"id":"63079eae-b897-4a3e-b900-d6a84ca4ec96","type":"FactorRange"},{"attributes":{"plot":{"id":"283a00dd-e99a-4eab-bd4b-0cb7a1ca0950","subtype":"Figure","type":"Plot"},"ticker":{"id":"8cc0e98e-201a-48b1-bde0-1887fc5991ac","type":"BasicTicker"}},"id":"6511f0f3-93f4-4b83-8ba4-3b17df197d1c","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"87b536ae-90e3-4350-b987-4790f8ee45ff","type":"Rect"},{"attributes":{"plot":null,"text":"Categorical Dot Plot"},"id":"b4d89c22-62f3-44bc-bafd-f631c4656d3b","type":"Title"},{"attributes":{},"id":"734d763d-a072-4221-b989-e88dc41bc03d","type":"CategoricalTickFormatter"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x0":{"value":0},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"f6aedbad-689e-4211-ba02-a3543a9a8341","type":"Segment"},{"attributes":{"line_color":{"value":"green"},"line_width":{"value":2},"x0":{"value":0},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"4ce4f56a-5b58-4566-b1a3-07620b2ab35f","type":"Segment"},{"attributes":{"dimension":1,"plot":{"id":"283a00dd-e99a-4eab-bd4b-0cb7a1ca0950","subtype":"Figure","type":"Plot"},"ticker":{"id":"1494de53-bc28-4d75-a2c5-cfa75ca3f272","type":"CategoricalTicker"}},"id":"7940eb58-c826-4eec-b82c-fe246a732dcd","type":"Grid"},{"attributes":{"data_source":{"id":"0361451b-fc45-499c-9189-1443fbbfd940","type":"ColumnDataSource"},"glyph":{"id":"aca02bec-bd1b-40f3-806f-1159ee084bf9","type":"Rect"},"hover_glyph":null,"nonselection_glyph":{"id":"87b536ae-90e3-4350-b987-4790f8ee45ff","type":"Rect"},"selection_glyph":null},"id":"47eb8d53-1c01-4d4b-9908-9b8bc8178b16","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"14a38da9-57ed-4ffd-9d78-aac39e383bf8","type":"BasicTickFormatter"},"plot":{"id":"283a00dd-e99a-4eab-bd4b-0cb7a1ca0950","subtype":"Figure","type":"Plot"},"ticker":{"id":"8cc0e98e-201a-48b1-bde0-1887fc5991ac","type":"BasicTicker"}},"id":"f668002c-475c-4420-856e-6268b322e5d0","type":"LinearAxis"},{"attributes":{"plot":null,"text":"Categorical Heatmap"},"id":"bb878839-bfd8-4965-812c-117333fcde5e","type":"Title"},{"attributes":{"children":[{"id":"30c090c0-6969-4645-85d0-5dd2a350129a","subtype":"Figure","type":"Plot"},{"id":"283a00dd-e99a-4eab-bd4b-0cb7a1ca0950","subtype":"Figure","type":"Plot"}],"sizing_mode":"scale_width"},"id":"966aa6b3-ca9e-49ad-a15b-6fbac54de73c","type":"Row"},{"attributes":{"callback":null,"end":100},"id":"07ef5fad-2ba2-4ccf-9330-61afbc38c4c0","type":"Range1d"},{"attributes":{"formatter":{"id":"3cbf3734-3630-42f8-81cd-459f8e1d8cf0","type":"CategoricalTickFormatter"},"plot":{"id":"283a00dd-e99a-4eab-bd4b-0cb7a1ca0950","subtype":"Figure","type":"Plot"},"ticker":{"id":"1494de53-bc28-4d75-a2c5-cfa75ca3f272","type":"CategoricalTicker"}},"id":"a3b69420-e366-4ba4-a737-5a62ac4248e0","type":"CategoricalAxis"},{"attributes":{"callback":null,"column_names":["y0","x1","y1"],"data":{"x1":[50,40,65,10,25,37,80,60],"y0":["a","b","c","d","e","f","g","h"],"y1":["a","b","c","d","e","f","g","h"]}},"id":"f7fde17d-60da-461d-b4a1-d45bb7d391a6","type":"ColumnDataSource"}],"root_ids":["966aa6b3-ca9e-49ad-a15b-6fbac54de73c"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"34c312cf-d997-4711-9aa1-bbf8cd26f839","elementid":"fa6518d1-6aeb-4d4f-8717-a4ea21cdd02a","modelid":"966aa6b3-ca9e-49ad-a15b-6fbac54de73c"}];
                
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
