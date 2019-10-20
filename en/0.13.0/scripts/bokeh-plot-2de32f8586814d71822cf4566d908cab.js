(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
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
      };var element = document.getElementById("af2355f5-6468-4a67-945e-8cbafc0df7a7");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'af2355f5-6468-4a67-945e-8cbafc0df7a7' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.13.0.min.js"];
    
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
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"a2475e88-60ca-4e39-88e8-1a6f94a6473d":{"roots":{"references":[{"attributes":{},"id":"46e5c9b3-2e11-4ec6-9f5e-9d04fb5298e3","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"2015":[-1,0,-1,-3,-2,-1],"2016":[-2,-1,-3,-1,-2,-2],"2017":[-1,-2,-1,0,-2,-2],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"85aa58de-c652-4922-852b-603cce614784","type":"Selection"},"selection_policy":{"id":"f4b5b778-24c7-417e-90cd-9e627a1ee3ba","type":"UnionRenderers"}},"id":"067607d3-ba4b-44ec-8675-46b4751c95c3","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"fe281b21-79b7-4d6a-88ed-aeffd3411947","type":"PanTool"},{"id":"decbd8d3-aca5-4edf-9f4f-4c4517568ee5","type":"WheelZoomTool"},{"id":"90644581-625e-4b8f-93d1-24ae1c77a7c1","type":"BoxZoomTool"},{"id":"3e8420f0-18ff-42e9-9f81-f3e391ba0f0c","type":"SaveTool"},{"id":"b3f64f77-8bc0-4f90-bb92-2f9d549195d7","type":"ResetTool"},{"id":"b37a904d-af01-401b-905f-082090f0c7c8","type":"HelpTool"}]},"id":"6cd4151f-63b9-4cf2-b3f5-1ac708556cb7","type":"Toolbar"},{"attributes":{"items":[{"id":"85c2138c-cc3b-4750-9cd1-be810c3dad1d","type":"LegendItem"},{"id":"159b3aeb-1101-45d5-b724-26e989f8ced2","type":"LegendItem"},{"id":"335784b7-6281-418e-82d5-b750def99e60","type":"LegendItem"},{"id":"f3d1cd1a-783b-4208-8365-7aa8d75af812","type":"LegendItem"},{"id":"777d37c0-14b5-4b03-91a3-0edf6a82b0cb","type":"LegendItem"},{"id":"8d885667-d311-40a7-b757-bbc187a2247c","type":"LegendItem"}],"location":"top_left","plot":{"id":"540b4cd8-8746-4cde-b81c-0d20c89a85ba","subtype":"Figure","type":"Plot"}},"id":"9db7fdd1-7f87-4e02-80a1-a140e729ca13","type":"Legend"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"range_padding":0.1},"id":"1de4e16e-ce32-44a7-a828-f2e03e6fefb2","type":"FactorRange"},{"attributes":{"fill_color":{"value":"#e0f3db"},"height":{"value":0.9},"left":{"expr":{"id":"1cdef63c-4395-4ef7-a12c-5fcdb8b76b7e","type":"Stack"}},"line_color":{"value":"#e0f3db"},"right":{"expr":{"id":"40f96473-0db7-456f-84cd-bebd82f25ebf","type":"Stack"}},"y":{"field":"fruits"}},"id":"e9a265d0-8bf5-472a-9551-d6068d4ed365","type":"HBar"},{"attributes":{},"id":"e7be93db-3982-45d7-859a-d79a2d46daba","type":"CategoricalTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"8abecd6f-a4d5-4134-9a9b-abe64a92deab","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"ad7b8eae-4581-4ece-ab22-3c092bd6efce","type":"Stack"}},"y":{"field":"fruits"}},"id":"6a02645d-655b-4314-82d0-b1ae31dedfe9","type":"HBar"},{"attributes":{"label":{"value":"2016 imports"},"renderers":[{"id":"c85edc15-d0fe-4c94-b56c-82dac79fa778","type":"GlyphRenderer"}]},"id":"777d37c0-14b5-4b03-91a3-0edf6a82b0cb","type":"LegendItem"},{"attributes":{"fill_color":{"value":"#43a2ca"},"height":{"value":0.9},"left":{"expr":{"id":"802d69bf-c05b-47dd-b3c6-4b0328e9b5c6","type":"Stack"}},"line_color":{"value":"#43a2ca"},"right":{"expr":{"id":"e99eb935-aebe-4eb7-94d3-28b38e6f1aaf","type":"Stack"}},"y":{"field":"fruits"}},"id":"1080ecc0-5acb-409d-a553-b1209acbf676","type":"HBar"},{"attributes":{"source":{"id":"067607d3-ba4b-44ec-8675-46b4751c95c3","type":"ColumnDataSource"}},"id":"89e0ae4e-d6f3-4de7-afdf-e28ebf49f3f8","type":"CDSView"},{"attributes":{"fields":[]},"id":"802d69bf-c05b-47dd-b3c6-4b0328e9b5c6","type":"Stack"},{"attributes":{},"id":"b3f64f77-8bc0-4f90-bb92-2f9d549195d7","type":"ResetTool"},{"attributes":{"source":{"id":"8d3b91e7-3491-4806-abe9-4ddb824951d9","type":"ColumnDataSource"}},"id":"3909201b-1357-4dfd-b117-7172cd95df9a","type":"CDSView"},{"attributes":{"source":{"id":"067607d3-ba4b-44ec-8675-46b4751c95c3","type":"ColumnDataSource"}},"id":"13fdd418-b215-4ece-8df6-1106d75e397f","type":"CDSView"},{"attributes":{"fields":["2015","2016"]},"id":"cd35a365-8213-48b0-a7b0-215ba335f1d7","type":"Stack"},{"attributes":{"fields":["2015","2016"]},"id":"1cdef63c-4395-4ef7-a12c-5fcdb8b76b7e","type":"Stack"},{"attributes":{"plot":null,"text":"Fruit import/export, by year"},"id":"522640fd-67b8-4d21-ad0b-9b2af7b6930e","type":"Title"},{"attributes":{"plot":{"id":"540b4cd8-8746-4cde-b81c-0d20c89a85ba","subtype":"Figure","type":"Plot"},"ticker":{"id":"46e5c9b3-2e11-4ec6-9f5e-9d04fb5298e3","type":"BasicTicker"}},"id":"01269477-0fe0-40c7-9749-0b0c969acb2e","type":"Grid"},{"attributes":{},"id":"3856b7b0-9357-4efb-935d-0dcd48d98650","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"28e51c9a-2501-44f5-8784-dde5aa995482","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"35fce725-6e69-4d4a-bfb2-0ddb48748fb9","type":"Stack"}},"y":{"field":"fruits"}},"id":"e5db42bd-4dc7-43f2-babd-c720b9f22968","type":"HBar"},{"attributes":{"data_source":{"id":"067607d3-ba4b-44ec-8675-46b4751c95c3","type":"ColumnDataSource"},"glyph":{"id":"de0a834a-da87-409c-a959-8cd3ec2ccd7b","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"name":"2016","nonselection_glyph":{"id":"1495c0fe-383c-47f4-b6f1-7f0351210f63","type":"HBar"},"selection_glyph":null,"view":{"id":"13fdd418-b215-4ece-8df6-1106d75e397f","type":"CDSView"}},"id":"c85edc15-d0fe-4c94-b56c-82dac79fa778","type":"GlyphRenderer"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"540b4cd8-8746-4cde-b81c-0d20c89a85ba","subtype":"Figure","type":"Plot"},"ticker":{"id":"e7be93db-3982-45d7-859a-d79a2d46daba","type":"CategoricalTicker"}},"id":"37c825df-ce7f-4dea-90b4-73356f54b9b2","type":"Grid"},{"attributes":{"fill_color":{"value":"#a8ddb5"},"height":{"value":0.9},"left":{"expr":{"id":"d587f953-d5f0-4ec8-9595-970b38cd98db","type":"Stack"}},"line_color":{"value":"#a8ddb5"},"right":{"expr":{"id":"cd35a365-8213-48b0-a7b0-215ba335f1d7","type":"Stack"}},"y":{"field":"fruits"}},"id":"2f1df453-394c-4b3f-9a93-6d2f68e4a621","type":"HBar"},{"attributes":{"fill_color":{"value":"#fdbb84"},"height":{"value":0.9},"left":{"expr":{"id":"d4230a12-65f5-4293-a8d3-313278343356","type":"Stack"}},"line_color":{"value":"#fdbb84"},"right":{"expr":{"id":"f0b5101d-7432-498a-b7c9-c52bc4c644e8","type":"Stack"}},"y":{"field":"fruits"}},"id":"de0a834a-da87-409c-a959-8cd3ec2ccd7b","type":"HBar"},{"attributes":{"source":{"id":"067607d3-ba4b-44ec-8675-46b4751c95c3","type":"ColumnDataSource"}},"id":"c5b4efe3-4954-4e95-a133-405125f8634d","type":"CDSView"},{"attributes":{},"id":"b37a904d-af01-401b-905f-082090f0c7c8","type":"HelpTool"},{"attributes":{"source":{"id":"8d3b91e7-3491-4806-abe9-4ddb824951d9","type":"ColumnDataSource"}},"id":"833a809c-2f1e-4f6d-bfda-f2117509f770","type":"CDSView"},{"attributes":{"fill_color":{"value":"#e34a33"},"height":{"value":0.9},"left":{"expr":{"id":"28e51c9a-2501-44f5-8784-dde5aa995482","type":"Stack"}},"line_color":{"value":"#e34a33"},"right":{"expr":{"id":"35fce725-6e69-4d4a-bfb2-0ddb48748fb9","type":"Stack"}},"y":{"field":"fruits"}},"id":"68fb145b-59af-4256-a116-6f9911757519","type":"HBar"},{"attributes":{"data_source":{"id":"8d3b91e7-3491-4806-abe9-4ddb824951d9","type":"ColumnDataSource"},"glyph":{"id":"1080ecc0-5acb-409d-a553-b1209acbf676","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"name":"2015","nonselection_glyph":{"id":"862af5c6-3ef0-40f2-9a49-98540bdb8dac","type":"HBar"},"selection_glyph":null,"view":{"id":"3909201b-1357-4dfd-b117-7172cd95df9a","type":"CDSView"}},"id":"e0fb1b24-2894-4408-9750-5904ed3db32f","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"d4230a12-65f5-4293-a8d3-313278343356","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"f0b5101d-7432-498a-b7c9-c52bc4c644e8","type":"Stack"}},"y":{"field":"fruits"}},"id":"1495c0fe-383c-47f4-b6f1-7f0351210f63","type":"HBar"},{"attributes":{},"id":"29dc33ac-ade5-4142-b788-a02e7342b9b5","type":"CategoricalScale"},{"attributes":{"formatter":{"id":"e3131a49-cdbb-4847-8d95-61db8da31caf","type":"CategoricalTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"540b4cd8-8746-4cde-b81c-0d20c89a85ba","subtype":"Figure","type":"Plot"},"ticker":{"id":"e7be93db-3982-45d7-859a-d79a2d46daba","type":"CategoricalTicker"}},"id":"9d8c61bc-979d-412f-bdd6-1dcc352b6e6c","type":"CategoricalAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"802d69bf-c05b-47dd-b3c6-4b0328e9b5c6","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"e99eb935-aebe-4eb7-94d3-28b38e6f1aaf","type":"Stack"}},"y":{"field":"fruits"}},"id":"862af5c6-3ef0-40f2-9a49-98540bdb8dac","type":"HBar"},{"attributes":{"fields":["2015"]},"id":"d587f953-d5f0-4ec8-9595-970b38cd98db","type":"Stack"},{"attributes":{},"id":"f4b5b778-24c7-417e-90cd-9e627a1ee3ba","type":"UnionRenderers"},{"attributes":{"callback":null,"end":16,"start":-16},"id":"942b08dd-a87c-4fb7-9463-1165db61b4d4","type":"Range1d"},{"attributes":{"source":{"id":"8d3b91e7-3491-4806-abe9-4ddb824951d9","type":"ColumnDataSource"}},"id":"77efb4eb-86d8-496c-b939-3f00cccfece4","type":"CDSView"},{"attributes":{"label":{"value":"2016 exports"},"renderers":[{"id":"984a96a2-df9f-42a5-9ede-5b4dd5a9d177","type":"GlyphRenderer"}]},"id":"159b3aeb-1101-45d5-b724-26e989f8ced2","type":"LegendItem"},{"attributes":{"formatter":{"id":"46e8a2f0-7f20-4ff4-aaf7-2b418c8308f5","type":"BasicTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"540b4cd8-8746-4cde-b81c-0d20c89a85ba","subtype":"Figure","type":"Plot"},"ticker":{"id":"46e5c9b3-2e11-4ec6-9f5e-9d04fb5298e3","type":"BasicTicker"}},"id":"8edeae6f-c614-479c-ba3e-830f0c138e1a","type":"LinearAxis"},{"attributes":{"fields":["2015","2016","2017"]},"id":"40f96473-0db7-456f-84cd-bebd82f25ebf","type":"Stack"},{"attributes":{"data_source":{"id":"067607d3-ba4b-44ec-8675-46b4751c95c3","type":"ColumnDataSource"},"glyph":{"id":"211431df-e697-4d2f-89a0-d1d56dcdd8cc","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"name":"2017","nonselection_glyph":{"id":"6a02645d-655b-4314-82d0-b1ae31dedfe9","type":"HBar"},"selection_glyph":null,"view":{"id":"c5b4efe3-4954-4e95-a133-405125f8634d","type":"CDSView"}},"id":"b4ffe33f-37ae-419d-860d-de9b3555275e","type":"GlyphRenderer"},{"attributes":{"label":{"value":"2017 imports"},"renderers":[{"id":"b4ffe33f-37ae-419d-860d-de9b3555275e","type":"GlyphRenderer"}]},"id":"8d885667-d311-40a7-b757-bbc187a2247c","type":"LegendItem"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"e088c47f-1095-4ee0-b133-4a5e2288864a","type":"BoxAnnotation"},{"attributes":{"label":{"value":"2017 exports"},"renderers":[{"id":"6e725185-38eb-4314-9023-7b5d6cd4397f","type":"GlyphRenderer"}]},"id":"335784b7-6281-418e-82d5-b750def99e60","type":"LegendItem"},{"attributes":{},"id":"46e8a2f0-7f20-4ff4-aaf7-2b418c8308f5","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#fee8c8"},"height":{"value":0.9},"left":{"expr":{"id":"8abecd6f-a4d5-4134-9a9b-abe64a92deab","type":"Stack"}},"line_color":{"value":"#fee8c8"},"right":{"expr":{"id":"ad7b8eae-4581-4ece-ab22-3c092bd6efce","type":"Stack"}},"y":{"field":"fruits"}},"id":"211431df-e697-4d2f-89a0-d1d56dcdd8cc","type":"HBar"},{"attributes":{},"id":"bbf8a7af-971e-416f-a6ea-5921b62b8c40","type":"Selection"},{"attributes":{},"id":"f4d00414-eeef-42c9-bc98-1bed17479d1a","type":"UnionRenderers"},{"attributes":{},"id":"fe281b21-79b7-4d6a-88ed-aeffd3411947","type":"PanTool"},{"attributes":{},"id":"decbd8d3-aca5-4edf-9f4f-4c4517568ee5","type":"WheelZoomTool"},{"attributes":{"fields":["2015"]},"id":"e99eb935-aebe-4eb7-94d3-28b38e6f1aaf","type":"Stack"},{"attributes":{"data_source":{"id":"067607d3-ba4b-44ec-8675-46b4751c95c3","type":"ColumnDataSource"},"glyph":{"id":"68fb145b-59af-4256-a116-6f9911757519","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"name":"2015","nonselection_glyph":{"id":"e5db42bd-4dc7-43f2-babd-c720b9f22968","type":"HBar"},"selection_glyph":null,"view":{"id":"89e0ae4e-d6f3-4de7-afdf-e28ebf49f3f8","type":"CDSView"}},"id":"1f60d508-4a3b-4562-a35a-1d05cbccba60","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"d587f953-d5f0-4ec8-9595-970b38cd98db","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"cd35a365-8213-48b0-a7b0-215ba335f1d7","type":"Stack"}},"y":{"field":"fruits"}},"id":"61cb5f74-50e8-417c-88ee-4da42d1e3ebc","type":"HBar"},{"attributes":{"data_source":{"id":"8d3b91e7-3491-4806-abe9-4ddb824951d9","type":"ColumnDataSource"},"glyph":{"id":"e9a265d0-8bf5-472a-9551-d6068d4ed365","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"name":"2017","nonselection_glyph":{"id":"606b16cf-32c9-4d9d-bf4e-43bafa541bbe","type":"HBar"},"selection_glyph":null,"view":{"id":"833a809c-2f1e-4f6d-bfda-f2117509f770","type":"CDSView"}},"id":"6e725185-38eb-4314-9023-7b5d6cd4397f","type":"GlyphRenderer"},{"attributes":{"label":{"value":"2015 imports"},"renderers":[{"id":"1f60d508-4a3b-4562-a35a-1d05cbccba60","type":"GlyphRenderer"}]},"id":"f3d1cd1a-783b-4208-8365-7aa8d75af812","type":"LegendItem"},{"attributes":{},"id":"3e8420f0-18ff-42e9-9f81-f3e391ba0f0c","type":"SaveTool"},{"attributes":{"fields":["2015","2016"]},"id":"f0b5101d-7432-498a-b7c9-c52bc4c644e8","type":"Stack"},{"attributes":{"fields":["2015"]},"id":"35fce725-6e69-4d4a-bfb2-0ddb48748fb9","type":"Stack"},{"attributes":{"label":{"value":"2015 exports"},"renderers":[{"id":"e0fb1b24-2894-4408-9750-5904ed3db32f","type":"GlyphRenderer"}]},"id":"85c2138c-cc3b-4750-9cd1-be810c3dad1d","type":"LegendItem"},{"attributes":{},"id":"85aa58de-c652-4922-852b-603cce614784","type":"Selection"},{"attributes":{"fields":["2015"]},"id":"d4230a12-65f5-4293-a8d3-313278343356","type":"Stack"},{"attributes":{"fields":[]},"id":"28e51c9a-2501-44f5-8784-dde5aa995482","type":"Stack"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"1cdef63c-4395-4ef7-a12c-5fcdb8b76b7e","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"40f96473-0db7-456f-84cd-bebd82f25ebf","type":"Stack"}},"y":{"field":"fruits"}},"id":"606b16cf-32c9-4d9d-bf4e-43bafa541bbe","type":"HBar"},{"attributes":{"fields":["2015","2016","2017"]},"id":"ad7b8eae-4581-4ece-ab22-3c092bd6efce","type":"Stack"},{"attributes":{"below":[{"id":"8edeae6f-c614-479c-ba3e-830f0c138e1a","type":"LinearAxis"}],"left":[{"id":"9d8c61bc-979d-412f-bdd6-1dcc352b6e6c","type":"CategoricalAxis"}],"outline_line_color":{"value":null},"plot_height":350,"renderers":[{"id":"8edeae6f-c614-479c-ba3e-830f0c138e1a","type":"LinearAxis"},{"id":"01269477-0fe0-40c7-9749-0b0c969acb2e","type":"Grid"},{"id":"9d8c61bc-979d-412f-bdd6-1dcc352b6e6c","type":"CategoricalAxis"},{"id":"37c825df-ce7f-4dea-90b4-73356f54b9b2","type":"Grid"},{"id":"e088c47f-1095-4ee0-b133-4a5e2288864a","type":"BoxAnnotation"},{"id":"9db7fdd1-7f87-4e02-80a1-a140e729ca13","type":"Legend"},{"id":"e0fb1b24-2894-4408-9750-5904ed3db32f","type":"GlyphRenderer"},{"id":"984a96a2-df9f-42a5-9ede-5b4dd5a9d177","type":"GlyphRenderer"},{"id":"6e725185-38eb-4314-9023-7b5d6cd4397f","type":"GlyphRenderer"},{"id":"1f60d508-4a3b-4562-a35a-1d05cbccba60","type":"GlyphRenderer"},{"id":"c85edc15-d0fe-4c94-b56c-82dac79fa778","type":"GlyphRenderer"},{"id":"b4ffe33f-37ae-419d-860d-de9b3555275e","type":"GlyphRenderer"}],"title":{"id":"522640fd-67b8-4d21-ad0b-9b2af7b6930e","type":"Title"},"toolbar":{"id":"6cd4151f-63b9-4cf2-b3f5-1ac708556cb7","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"942b08dd-a87c-4fb7-9463-1165db61b4d4","type":"Range1d"},"x_scale":{"id":"3856b7b0-9357-4efb-935d-0dcd48d98650","type":"LinearScale"},"y_range":{"id":"1de4e16e-ce32-44a7-a828-f2e03e6fefb2","type":"FactorRange"},"y_scale":{"id":"29dc33ac-ade5-4142-b788-a02e7342b9b5","type":"CategoricalScale"}},"id":"540b4cd8-8746-4cde-b81c-0d20c89a85ba","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"8d3b91e7-3491-4806-abe9-4ddb824951d9","type":"ColumnDataSource"},"glyph":{"id":"2f1df453-394c-4b3f-9a93-6d2f68e4a621","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"name":"2016","nonselection_glyph":{"id":"61cb5f74-50e8-417c-88ee-4da42d1e3ebc","type":"HBar"},"selection_glyph":null,"view":{"id":"77efb4eb-86d8-496c-b939-3f00cccfece4","type":"CDSView"}},"id":"984a96a2-df9f-42a5-9ede-5b4dd5a9d177","type":"GlyphRenderer"},{"attributes":{},"id":"e3131a49-cdbb-4847-8d95-61db8da31caf","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"bbf8a7af-971e-416f-a6ea-5921b62b8c40","type":"Selection"},"selection_policy":{"id":"f4d00414-eeef-42c9-bc98-1bed17479d1a","type":"UnionRenderers"}},"id":"8d3b91e7-3491-4806-abe9-4ddb824951d9","type":"ColumnDataSource"},{"attributes":{"fields":["2015","2016"]},"id":"8abecd6f-a4d5-4134-9a9b-abe64a92deab","type":"Stack"},{"attributes":{"overlay":{"id":"e088c47f-1095-4ee0-b133-4a5e2288864a","type":"BoxAnnotation"}},"id":"90644581-625e-4b8f-93d1-24ae1c77a7c1","type":"BoxZoomTool"}],"root_ids":["540b4cd8-8746-4cde-b81c-0d20c89a85ba"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"a2475e88-60ca-4e39-88e8-1a6f94a6473d","roots":{"540b4cd8-8746-4cde-b81c-0d20c89a85ba":"af2355f5-6468-4a67-945e-8cbafc0df7a7"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing")
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();