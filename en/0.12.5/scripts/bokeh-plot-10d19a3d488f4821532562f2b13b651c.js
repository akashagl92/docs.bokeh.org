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
      };var element = document.getElementById("20c567cf-55d9-4067-9878-bf0161dba331");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '20c567cf-55d9-4067-9878-bf0161dba331' but no matching script tag was found. ")
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
                var docs_json = {"b1005a2b-0e01-46ab-bcc3-5d26988c90c9":{"roots":{"references":[{"attributes":{"data_source":{"id":"ec98195e-d2ae-4c1f-b01f-7f15fec6b2d9","type":"ColumnDataSource"},"glyph":{"id":"155bfe15-2971-42f3-b3df-4c752c9b0762","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"bb2c0130-f733-459d-b93b-85791e15a0f2","type":"Segment"},"selection_glyph":null},"id":"b236fe13-823f-41bb-b750-87d7d2ae720b","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x1","y1","y0"],"data":{"x1":[50,40,65,10,25,37,80,60],"y0":["a","b","c","d","e","f","g","h"],"y1":["a","b","c","d","e","f","g","h"]}},"id":"ec98195e-d2ae-4c1f-b01f-7f15fec6b2d9","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"4d08a4c5-a190-4ca6-94c0-9aade62c9667","type":"CategoricalAxis"}],"left":[{"id":"cb5b2e71-b907-443c-a1ce-fabf9737b64e","type":"CategoricalAxis"}],"renderers":[{"id":"4d08a4c5-a190-4ca6-94c0-9aade62c9667","type":"CategoricalAxis"},{"id":"fae8a2d4-9c14-4a4e-bf2b-e4d8b70396c9","type":"Grid"},{"id":"cb5b2e71-b907-443c-a1ce-fabf9737b64e","type":"CategoricalAxis"},{"id":"11064497-1cfd-4f6f-a722-cdfab4ff4398","type":"Grid"},{"id":"10f1471a-fdf0-48a2-a3d9-ac2ee0d73c4f","type":"GlyphRenderer"}],"sizing_mode":"scale_width","title":{"id":"917bce54-0996-4c9a-8cfc-ca0d8924fe24","type":"Title"},"tool_events":{"id":"f00c5037-085e-4981-aeb6-0131dba4e4ab","type":"ToolEvents"},"toolbar":{"id":"1878715f-1c21-457f-9cde-7046d9a15318","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"a76c6204-055b-42b1-bf15-e4077e79e9e9","type":"FactorRange"},"y_range":{"id":"1f7c00a8-761a-4188-8fe2-3fc9fb6fb691","type":"FactorRange"}},"id":"39fb3da4-1457-4e85-93ac-dd8e7dfa0211","subtype":"Figure","type":"Plot"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"green"},"line_width":{"value":3},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"5aa2fa4a-e8f9-4216-8670-2e1645bb9e90","type":"Circle"},{"attributes":{},"id":"d9dba605-1be1-4da0-87ff-5075562e787f","type":"BasicTicker"},{"attributes":{},"id":"f540ad93-2e6d-400c-919b-9f466c823845","type":"CategoricalTickFormatter"},{"attributes":{"plot":{"id":"39fb3da4-1457-4e85-93ac-dd8e7dfa0211","subtype":"Figure","type":"Plot"},"ticker":{"id":"7f5d0563-2596-4f68-a170-5a73b18498f9","type":"CategoricalTicker"}},"id":"fae8a2d4-9c14-4a4e-bf2b-e4d8b70396c9","type":"Grid"},{"attributes":{"plot":null,"text":"Categorical Heatmap"},"id":"917bce54-0996-4c9a-8cfc-ca0d8924fe24","type":"Title"},{"attributes":{"formatter":{"id":"63e0d451-1b18-4826-bcd1-654a77c7e24e","type":"CategoricalTickFormatter"},"plot":{"id":"217a27e5-111b-4cfb-b6db-0867a116ad10","subtype":"Figure","type":"Plot"},"ticker":{"id":"61980868-e675-4e60-befd-4b37ef726261","type":"CategoricalTicker"}},"id":"5b4e020b-928a-4191-abb7-d4a1e4d87b41","type":"CategoricalAxis"},{"attributes":{},"id":"c2a6fcf0-8946-43f2-ab49-132ee5b8c6f8","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"d3a7a503-cff8-43e8-b56d-2ad5c95594ac","type":"HoverTool"}]},"id":"1878715f-1c21-457f-9cde-7046d9a15318","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"bea2f392-9c8f-418d-a333-238b47b63459","type":"Circle"},{"attributes":{},"id":"7f5d0563-2596-4f68-a170-5a73b18498f9","type":"CategoricalTicker"},{"attributes":{},"id":"f00c5037-085e-4981-aeb6-0131dba4e4ab","type":"ToolEvents"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"a8b2c57a-8fd3-4b80-968d-90b6a4f2dc14","type":"Rect"},{"attributes":{},"id":"6f554750-1efb-4105-8f39-8baed1cb62a4","type":"ToolEvents"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x0":{"value":0},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"bb2c0130-f733-459d-b93b-85791e15a0f2","type":"Segment"},{"attributes":{"fill_color":{"field":"fill_color"},"height":{"units":"data","value":1},"line_color":{"field":"line_color"},"width":{"units":"data","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"07a3a9fe-7cd3-44c7-a667-54408b9b7c00","type":"Rect"},{"attributes":{"callback":null,"factors":["a","b","c","d","e","f","g","h"]},"id":"f8738010-3211-4d25-83d6-fbdc98237466","type":"FactorRange"},{"attributes":{},"id":"99952d45-d992-4b55-9e9b-a8f6fe747bbf","type":"CategoricalTickFormatter"},{"attributes":{"data_source":{"id":"9ed5122e-a9e0-4567-ad4e-ede5d86ca968","type":"ColumnDataSource"},"glyph":{"id":"07a3a9fe-7cd3-44c7-a667-54408b9b7c00","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a8b2c57a-8fd3-4b80-968d-90b6a4f2dc14","type":"Rect"},"selection_glyph":null},"id":"10f1471a-fdf0-48a2-a3d9-ac2ee0d73c4f","type":"GlyphRenderer"},{"attributes":{"callback":null,"plot":{"id":"39fb3da4-1457-4e85-93ac-dd8e7dfa0211","subtype":"Figure","type":"Plot"}},"id":"d3a7a503-cff8-43e8-b56d-2ad5c95594ac","type":"HoverTool"},{"attributes":{"dimension":1,"plot":{"id":"39fb3da4-1457-4e85-93ac-dd8e7dfa0211","subtype":"Figure","type":"Plot"},"ticker":{"id":"069f70ec-f759-421b-b4bc-8e91ca599a1c","type":"CategoricalTicker"}},"id":"11064497-1cfd-4f6f-a722-cdfab4ff4398","type":"Grid"},{"attributes":{"callback":null,"factors":["foo","bar","baz"]},"id":"1f7c00a8-761a-4188-8fe2-3fc9fb6fb691","type":"FactorRange"},{"attributes":{"callback":null,"end":100},"id":"bf3a7702-935e-4a89-aa88-19edec83294c","type":"Range1d"},{"attributes":{"plot":{"id":"217a27e5-111b-4cfb-b6db-0867a116ad10","subtype":"Figure","type":"Plot"},"ticker":{"id":"d9dba605-1be1-4da0-87ff-5075562e787f","type":"BasicTicker"}},"id":"a1ea2648-dc98-46ea-934a-05b644ab6d9f","type":"Grid"},{"attributes":{"formatter":{"id":"99952d45-d992-4b55-9e9b-a8f6fe747bbf","type":"CategoricalTickFormatter"},"plot":{"id":"39fb3da4-1457-4e85-93ac-dd8e7dfa0211","subtype":"Figure","type":"Plot"},"ticker":{"id":"7f5d0563-2596-4f68-a170-5a73b18498f9","type":"CategoricalTicker"}},"id":"4d08a4c5-a190-4ca6-94c0-9aade62c9667","type":"CategoricalAxis"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"ae3001ff-5ed8-4bca-b36e-d8a05a442504","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"217a27e5-111b-4cfb-b6db-0867a116ad10","subtype":"Figure","type":"Plot"},"ticker":{"id":"61980868-e675-4e60-befd-4b37ef726261","type":"CategoricalTicker"}},"id":"d3fe4ab1-a6f5-4e30-9b04-b2811a7f3eb4","type":"Grid"},{"attributes":{"data_source":{"id":"a5343d89-2da6-4a0e-8e0b-dc10abccd997","type":"ColumnDataSource"},"glyph":{"id":"5aa2fa4a-e8f9-4216-8670-2e1645bb9e90","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"bea2f392-9c8f-418d-a333-238b47b63459","type":"Circle"},"selection_glyph":null},"id":"963491c1-805e-4d2e-9221-0db8fc688ba9","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"c2a6fcf0-8946-43f2-ab49-132ee5b8c6f8","type":"BasicTickFormatter"},"plot":{"id":"217a27e5-111b-4cfb-b6db-0867a116ad10","subtype":"Figure","type":"Plot"},"ticker":{"id":"d9dba605-1be1-4da0-87ff-5075562e787f","type":"BasicTicker"}},"id":"ac32d720-9e68-4e46-a1e8-cb98b42da4bb","type":"LinearAxis"},{"attributes":{},"id":"069f70ec-f759-421b-b4bc-8e91ca599a1c","type":"CategoricalTicker"},{"attributes":{},"id":"61980868-e675-4e60-befd-4b37ef726261","type":"CategoricalTicker"},{"attributes":{"line_color":{"value":"green"},"line_width":{"value":2},"x0":{"value":0},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"155bfe15-2971-42f3-b3df-4c752c9b0762","type":"Segment"},{"attributes":{"children":[{"id":"39fb3da4-1457-4e85-93ac-dd8e7dfa0211","subtype":"Figure","type":"Plot"},{"id":"217a27e5-111b-4cfb-b6db-0867a116ad10","subtype":"Figure","type":"Plot"}],"sizing_mode":"scale_width"},"id":"39af80c8-40f2-4a37-b589-a63eb29b289d","type":"Row"},{"attributes":{"formatter":{"id":"f540ad93-2e6d-400c-919b-9f466c823845","type":"CategoricalTickFormatter"},"plot":{"id":"39fb3da4-1457-4e85-93ac-dd8e7dfa0211","subtype":"Figure","type":"Plot"},"ticker":{"id":"069f70ec-f759-421b-b4bc-8e91ca599a1c","type":"CategoricalTicker"}},"id":"cb5b2e71-b907-443c-a1ce-fabf9737b64e","type":"CategoricalAxis"},{"attributes":{"callback":null,"factors":["foo","bar","baz"]},"id":"a76c6204-055b-42b1-bf15-e4077e79e9e9","type":"FactorRange"},{"attributes":{},"id":"63e0d451-1b18-4826-bcd1-654a77c7e24e","type":"CategoricalTickFormatter"},{"attributes":{"plot":null,"text":"Categorical Dot Plot"},"id":"426325df-ffe1-4df4-a759-67b1432ccf03","type":"Title"},{"attributes":{"callback":null,"column_names":["x","y","fill_color","line_color"],"data":{"fill_color":["#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B"],"line_color":["#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B"],"x":["foo","foo","foo","bar","bar","bar","baz","baz","baz"],"y":["foo","bar","baz","foo","bar","baz","foo","bar","baz"]}},"id":"9ed5122e-a9e0-4567-ad4e-ede5d86ca968","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"ac32d720-9e68-4e46-a1e8-cb98b42da4bb","type":"LinearAxis"}],"left":[{"id":"5b4e020b-928a-4191-abb7-d4a1e4d87b41","type":"CategoricalAxis"}],"renderers":[{"id":"ac32d720-9e68-4e46-a1e8-cb98b42da4bb","type":"LinearAxis"},{"id":"a1ea2648-dc98-46ea-934a-05b644ab6d9f","type":"Grid"},{"id":"5b4e020b-928a-4191-abb7-d4a1e4d87b41","type":"CategoricalAxis"},{"id":"d3fe4ab1-a6f5-4e30-9b04-b2811a7f3eb4","type":"Grid"},{"id":"b236fe13-823f-41bb-b750-87d7d2ae720b","type":"GlyphRenderer"},{"id":"963491c1-805e-4d2e-9221-0db8fc688ba9","type":"GlyphRenderer"}],"sizing_mode":"scale_width","title":{"id":"426325df-ffe1-4df4-a759-67b1432ccf03","type":"Title"},"tool_events":{"id":"6f554750-1efb-4105-8f39-8baed1cb62a4","type":"ToolEvents"},"toolbar":{"id":"ae3001ff-5ed8-4bca-b36e-d8a05a442504","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"bf3a7702-935e-4a89-aa88-19edec83294c","type":"Range1d"},"y_range":{"id":"f8738010-3211-4d25-83d6-fbdc98237466","type":"FactorRange"}},"id":"217a27e5-111b-4cfb-b6db-0867a116ad10","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[50,40,65,10,25,37,80,60],"y":["a","b","c","d","e","f","g","h"]}},"id":"a5343d89-2da6-4a0e-8e0b-dc10abccd997","type":"ColumnDataSource"}],"root_ids":["39af80c8-40f2-4a37-b589-a63eb29b289d"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"b1005a2b-0e01-46ab-bcc3-5d26988c90c9","elementid":"20c567cf-55d9-4067-9878-bf0161dba331","modelid":"39af80c8-40f2-4a37-b589-a63eb29b289d"}];
                
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
