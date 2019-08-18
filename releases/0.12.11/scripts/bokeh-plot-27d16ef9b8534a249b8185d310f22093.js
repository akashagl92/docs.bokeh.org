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
      };var element = document.getElementById("07a6104b-16d7-475d-bf78-2d716db90491");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '07a6104b-16d7-475d-bf78-2d716db90491' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.11.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.11.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.11.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.11.min.js"];
    
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
                    var docs_json = '{"2b3540b6-d89d-428c-9c29-8fbfb7c91d4b":{"roots":{"references":[{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"range_padding":0.1},"id":"a59a7a68-b1f5-4c9f-a4f5-1f29419ce222","type":"FactorRange"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"6ce9ab9b-b7fc-4840-889a-3eb2026cbe09","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"51c479fb-3d1d-49a8-97cd-1e6adf5f5dac","type":"Stack"}},"y":{"field":"fruits"}},"id":"0d27c043-a788-4d6d-b331-f5c376eeaae0","type":"HBar"},{"attributes":{"fields":["2015","2016"]},"id":"6ce9ab9b-b7fc-4840-889a-3eb2026cbe09","type":"Stack"},{"attributes":{"fill_color":{"value":"#fee8c8"},"height":{"value":0.9},"left":{"expr":{"id":"6ce9ab9b-b7fc-4840-889a-3eb2026cbe09","type":"Stack"}},"line_color":{"value":"#fee8c8"},"right":{"expr":{"id":"51c479fb-3d1d-49a8-97cd-1e6adf5f5dac","type":"Stack"}},"y":{"field":"fruits"}},"id":"7c5227c9-0168-4038-a162-57bf13e56490","type":"HBar"},{"attributes":{"fields":["2015","2016"]},"id":"abcf5895-24ff-4342-ba96-82945cadb82c","type":"Stack"},{"attributes":{"label":{"value":"2016 imports"},"renderers":[{"id":"d2c962ee-dcf6-4b31-967d-2bbee12599a8","type":"GlyphRenderer"}]},"id":"f110e7a9-3161-407c-a8fa-91dfc2c4ecc4","type":"LegendItem"},{"attributes":{"fields":["2015"]},"id":"7593bf1f-3abc-4c32-82f6-bd6512ad3631","type":"Stack"},{"attributes":{},"id":"c7878c26-cbaa-43b9-904d-3ca88ef98bb8","type":"CategoricalTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"05fa5509-b6d8-4c21-a1ac-7c97c4848f3d","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"44a08cc4-b987-4952-87d2-0535c241f833","type":"Stack"}},"y":{"field":"fruits"}},"id":"c62a309d-f265-454a-bc81-01d06a65b21c","type":"HBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"7593bf1f-3abc-4c32-82f6-bd6512ad3631","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"65fec1b7-d506-433e-9511-8f2bd6d2934c","type":"Stack"}},"y":{"field":"fruits"}},"id":"abea2ace-5cf3-42d8-9604-73011c693045","type":"HBar"},{"attributes":{"fields":["2015"]},"id":"9b7215e7-3b6f-460b-aae0-008996701001","type":"Stack"},{"attributes":{"label":{"value":"2017 imports"},"renderers":[{"id":"7fd6b82e-36fa-4bed-94de-b6a895eb2fa9","type":"GlyphRenderer"}]},"id":"d314e4cf-f7c5-46c3-9259-dece24f1018d","type":"LegendItem"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"837ff1c0-71aa-40cb-b97c-ec04932e4d62","subtype":"Figure","type":"Plot"},"ticker":{"id":"adce9bf3-c3ce-418c-98a7-eb92fc6c7af6","type":"CategoricalTicker"}},"id":"5a329e18-d821-46b7-833b-63a4051f272c","type":"Grid"},{"attributes":{},"id":"adce9bf3-c3ce-418c-98a7-eb92fc6c7af6","type":"CategoricalTicker"},{"attributes":{"label":{"value":"2016 exports"},"renderers":[{"id":"5178f8c0-3f7f-4776-ab89-f786195a5577","type":"GlyphRenderer"}]},"id":"6736b3f2-da8a-48ad-9556-81fa8beddb5f","type":"LegendItem"},{"attributes":{"fields":["2015"]},"id":"66683ea4-965a-484d-9a29-2787ad9fbc8b","type":"Stack"},{"attributes":{"label":{"value":"2017 exports"},"renderers":[{"id":"ba682421-6e23-4899-a176-976d987f0144","type":"GlyphRenderer"}]},"id":"19b1cf5e-8537-43a3-a745-3482bbed6dd5","type":"LegendItem"},{"attributes":{"callback":null,"column_names":["fruits","2015","2016","2017"],"data":{"2015":[-1,0,-1,-3,-2,-1],"2016":[-2,-1,-3,-1,-2,-2],"2017":[-1,-2,-1,0,-2,-2],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]}},"id":"6d989133-855b-4d7e-83b4-9e6034974674","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"b8dd8cef-5f51-41f5-baba-a091d5794ba7","type":"BoxAnnotation"},{"attributes":{"source":{"id":"6d989133-855b-4d7e-83b4-9e6034974674","type":"ColumnDataSource"}},"id":"dbaefd54-49b7-434d-9d71-9dec6400ecc9","type":"CDSView"},{"attributes":{"data_source":{"id":"8100bef7-71fb-4e57-9ab5-e5455d089d0a","type":"ColumnDataSource"},"glyph":{"id":"477fefbd-1833-4dc6-a80e-73cb83c2857b","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6a1e3dcb-d25a-4dc3-bee6-656086671659","type":"HBar"},"selection_glyph":null,"view":{"id":"d7f83d45-88aa-40ca-a6ad-ba528a4720f2","type":"CDSView"}},"id":"ba682421-6e23-4899-a176-976d987f0144","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"6d989133-855b-4d7e-83b4-9e6034974674","type":"ColumnDataSource"},"glyph":{"id":"7c5227c9-0168-4038-a162-57bf13e56490","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"0d27c043-a788-4d6d-b331-f5c376eeaae0","type":"HBar"},"selection_glyph":null,"view":{"id":"569b6298-d4f3-4ab4-a462-be1a2420d1e6","type":"CDSView"}},"id":"7fd6b82e-36fa-4bed-94de-b6a895eb2fa9","type":"GlyphRenderer"},{"attributes":{"label":{"value":"2015 exports"},"renderers":[{"id":"1fd642ee-82d4-43cb-b5a2-6398c2cf4eae","type":"GlyphRenderer"}]},"id":"58006015-cca8-48e4-843b-78f44e4251ec","type":"LegendItem"},{"attributes":{"data_source":{"id":"6d989133-855b-4d7e-83b4-9e6034974674","type":"ColumnDataSource"},"glyph":{"id":"35857cf9-867a-455d-bd2f-180ff1f60e3b","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"c62a309d-f265-454a-bc81-01d06a65b21c","type":"HBar"},"selection_glyph":null,"view":{"id":"dbaefd54-49b7-434d-9d71-9dec6400ecc9","type":"CDSView"}},"id":"fc7a7c69-8552-43bd-8954-c254efdf8198","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#fdbb84"},"height":{"value":0.9},"left":{"expr":{"id":"7593bf1f-3abc-4c32-82f6-bd6512ad3631","type":"Stack"}},"line_color":{"value":"#fdbb84"},"right":{"expr":{"id":"65fec1b7-d506-433e-9511-8f2bd6d2934c","type":"Stack"}},"y":{"field":"fruits"}},"id":"2977d420-8684-4eb3-b1b1-08d5b7b2c189","type":"HBar"},{"attributes":{"fields":["2015","2016","2017"]},"id":"51c479fb-3d1d-49a8-97cd-1e6adf5f5dac","type":"Stack"},{"attributes":{"formatter":{"id":"c7878c26-cbaa-43b9-904d-3ca88ef98bb8","type":"CategoricalTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"837ff1c0-71aa-40cb-b97c-ec04932e4d62","subtype":"Figure","type":"Plot"},"ticker":{"id":"adce9bf3-c3ce-418c-98a7-eb92fc6c7af6","type":"CategoricalTicker"}},"id":"23691003-3c4f-4b12-a80c-a5d0c015a32c","type":"CategoricalAxis"},{"attributes":{"data_source":{"id":"8100bef7-71fb-4e57-9ab5-e5455d089d0a","type":"ColumnDataSource"},"glyph":{"id":"5fc26b38-d1ba-4ac1-be96-d9eb3b14c1fc","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"fdee9c23-8dee-4a2c-84c2-6d7590d96124","type":"HBar"},"selection_glyph":null,"view":{"id":"5773f0da-30b4-4385-8fa0-8adf69ad2475","type":"CDSView"}},"id":"1fd642ee-82d4-43cb-b5a2-6398c2cf4eae","type":"GlyphRenderer"},{"attributes":{},"id":"ad645177-ecab-406f-8a84-31d039a45906","type":"LinearScale"},{"attributes":{"items":[{"id":"58006015-cca8-48e4-843b-78f44e4251ec","type":"LegendItem"},{"id":"6736b3f2-da8a-48ad-9556-81fa8beddb5f","type":"LegendItem"},{"id":"19b1cf5e-8537-43a3-a745-3482bbed6dd5","type":"LegendItem"},{"id":"11ee3fc1-1bb0-4631-b98a-42fc2aa47dd2","type":"LegendItem"},{"id":"f110e7a9-3161-407c-a8fa-91dfc2c4ecc4","type":"LegendItem"},{"id":"d314e4cf-f7c5-46c3-9259-dece24f1018d","type":"LegendItem"}],"location":"top_left","plot":{"id":"837ff1c0-71aa-40cb-b97c-ec04932e4d62","subtype":"Figure","type":"Plot"}},"id":"f49a93a8-12d4-4293-ba2a-e4eaf7f94ec5","type":"Legend"},{"attributes":{"data_source":{"id":"6d989133-855b-4d7e-83b4-9e6034974674","type":"ColumnDataSource"},"glyph":{"id":"2977d420-8684-4eb3-b1b1-08d5b7b2c189","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"abea2ace-5cf3-42d8-9604-73011c693045","type":"HBar"},"selection_glyph":null,"view":{"id":"3f722a7f-1a83-4c15-8282-1772c8ecb21f","type":"CDSView"}},"id":"d2c962ee-dcf6-4b31-967d-2bbee12599a8","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":"Fruit import/export, by year"},"id":"af98f8ee-124d-46d8-ad80-4aa076069dd8","type":"Title"},{"attributes":{"fields":[]},"id":"fe776be9-581f-4df2-bd54-3b7a0dc7de15","type":"Stack"},{"attributes":{"fields":["2015","2016","2017"]},"id":"1e0855dc-73d0-4ac8-9915-f566c2b6a984","type":"Stack"},{"attributes":{"overlay":{"id":"b8dd8cef-5f51-41f5-baba-a091d5794ba7","type":"BoxAnnotation"}},"id":"247062c3-c866-4580-a871-f96c0b0ea5af","type":"BoxZoomTool"},{"attributes":{"label":{"value":"2015 imports"},"renderers":[{"id":"fc7a7c69-8552-43bd-8954-c254efdf8198","type":"GlyphRenderer"}]},"id":"11ee3fc1-1bb0-4631-b98a-42fc2aa47dd2","type":"LegendItem"},{"attributes":{"fill_color":{"value":"#43a2ca"},"height":{"value":0.9},"left":{"expr":{"id":"fe776be9-581f-4df2-bd54-3b7a0dc7de15","type":"Stack"}},"line_color":{"value":"#43a2ca"},"right":{"expr":{"id":"66683ea4-965a-484d-9a29-2787ad9fbc8b","type":"Stack"}},"y":{"field":"fruits"}},"id":"5fc26b38-d1ba-4ac1-be96-d9eb3b14c1fc","type":"HBar"},{"attributes":{"source":{"id":"6d989133-855b-4d7e-83b4-9e6034974674","type":"ColumnDataSource"}},"id":"569b6298-d4f3-4ab4-a462-be1a2420d1e6","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"abcf5895-24ff-4342-ba96-82945cadb82c","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"1e0855dc-73d0-4ac8-9915-f566c2b6a984","type":"Stack"}},"y":{"field":"fruits"}},"id":"6a1e3dcb-d25a-4dc3-bee6-656086671659","type":"HBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"9b7215e7-3b6f-460b-aae0-008996701001","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"9bb1b088-aeb9-426b-8b3e-4699ed63f081","type":"Stack"}},"y":{"field":"fruits"}},"id":"fee23dd3-dabe-4e15-b2d3-ded1d93245aa","type":"HBar"},{"attributes":{"below":[{"id":"495bd8c1-017b-41d7-b253-ba41d1a4521e","type":"LinearAxis"}],"left":[{"id":"23691003-3c4f-4b12-a80c-a5d0c015a32c","type":"CategoricalAxis"}],"outline_line_color":{"value":null},"plot_height":250,"renderers":[{"id":"495bd8c1-017b-41d7-b253-ba41d1a4521e","type":"LinearAxis"},{"id":"eb0d5bdd-df53-4301-b937-7f74d8944ec7","type":"Grid"},{"id":"23691003-3c4f-4b12-a80c-a5d0c015a32c","type":"CategoricalAxis"},{"id":"5a329e18-d821-46b7-833b-63a4051f272c","type":"Grid"},{"id":"b8dd8cef-5f51-41f5-baba-a091d5794ba7","type":"BoxAnnotation"},{"id":"f49a93a8-12d4-4293-ba2a-e4eaf7f94ec5","type":"Legend"},{"id":"1fd642ee-82d4-43cb-b5a2-6398c2cf4eae","type":"GlyphRenderer"},{"id":"5178f8c0-3f7f-4776-ab89-f786195a5577","type":"GlyphRenderer"},{"id":"ba682421-6e23-4899-a176-976d987f0144","type":"GlyphRenderer"},{"id":"fc7a7c69-8552-43bd-8954-c254efdf8198","type":"GlyphRenderer"},{"id":"d2c962ee-dcf6-4b31-967d-2bbee12599a8","type":"GlyphRenderer"},{"id":"7fd6b82e-36fa-4bed-94de-b6a895eb2fa9","type":"GlyphRenderer"}],"title":{"id":"af98f8ee-124d-46d8-ad80-4aa076069dd8","type":"Title"},"toolbar":{"id":"b0865e29-6762-4f77-b319-05906163e1da","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"078e495e-fdc6-4814-8f22-37f8fc0c5dc9","type":"Range1d"},"x_scale":{"id":"ad645177-ecab-406f-8a84-31d039a45906","type":"LinearScale"},"y_range":{"id":"a59a7a68-b1f5-4c9f-a4f5-1f29419ce222","type":"FactorRange"},"y_scale":{"id":"32a4c690-0a7d-409b-9740-fb2a44e3a311","type":"CategoricalScale"}},"id":"837ff1c0-71aa-40cb-b97c-ec04932e4d62","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"df7a6c19-186a-4aa3-a275-176552d5f705","type":"SaveTool"},{"attributes":{},"id":"4a4d98e0-813a-40e1-820b-df13ad599ca9","type":"BasicTicker"},{"attributes":{"fields":["2015","2016"]},"id":"9bb1b088-aeb9-426b-8b3e-4699ed63f081","type":"Stack"},{"attributes":{"fields":["2015"]},"id":"44a08cc4-b987-4952-87d2-0535c241f833","type":"Stack"},{"attributes":{"fields":[]},"id":"05fa5509-b6d8-4c21-a1ac-7c97c4848f3d","type":"Stack"},{"attributes":{"formatter":{"id":"646c3d4e-a4e1-43c7-8fb3-a4c341a6debe","type":"BasicTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"837ff1c0-71aa-40cb-b97c-ec04932e4d62","subtype":"Figure","type":"Plot"},"ticker":{"id":"4a4d98e0-813a-40e1-820b-df13ad599ca9","type":"BasicTicker"}},"id":"495bd8c1-017b-41d7-b253-ba41d1a4521e","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#e34a33"},"height":{"value":0.9},"left":{"expr":{"id":"05fa5509-b6d8-4c21-a1ac-7c97c4848f3d","type":"Stack"}},"line_color":{"value":"#e34a33"},"right":{"expr":{"id":"44a08cc4-b987-4952-87d2-0535c241f833","type":"Stack"}},"y":{"field":"fruits"}},"id":"35857cf9-867a-455d-bd2f-180ff1f60e3b","type":"HBar"},{"attributes":{},"id":"32a4c690-0a7d-409b-9740-fb2a44e3a311","type":"CategoricalScale"},{"attributes":{"callback":null,"column_names":["fruits","2015","2016","2017"],"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]}},"id":"8100bef7-71fb-4e57-9ab5-e5455d089d0a","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":16,"start":-16},"id":"078e495e-fdc6-4814-8f22-37f8fc0c5dc9","type":"Range1d"},{"attributes":{"fill_color":{"value":"#a8ddb5"},"height":{"value":0.9},"left":{"expr":{"id":"9b7215e7-3b6f-460b-aae0-008996701001","type":"Stack"}},"line_color":{"value":"#a8ddb5"},"right":{"expr":{"id":"9bb1b088-aeb9-426b-8b3e-4699ed63f081","type":"Stack"}},"y":{"field":"fruits"}},"id":"9308b34a-957f-4a75-a5a3-82a2bc34ec9e","type":"HBar"},{"attributes":{},"id":"610fd11e-a854-492d-96b4-e29792bb155a","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"fe776be9-581f-4df2-bd54-3b7a0dc7de15","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"66683ea4-965a-484d-9a29-2787ad9fbc8b","type":"Stack"}},"y":{"field":"fruits"}},"id":"fdee9c23-8dee-4a2c-84c2-6d7590d96124","type":"HBar"},{"attributes":{"source":{"id":"6d989133-855b-4d7e-83b4-9e6034974674","type":"ColumnDataSource"}},"id":"3f722a7f-1a83-4c15-8282-1772c8ecb21f","type":"CDSView"},{"attributes":{"data_source":{"id":"8100bef7-71fb-4e57-9ab5-e5455d089d0a","type":"ColumnDataSource"},"glyph":{"id":"9308b34a-957f-4a75-a5a3-82a2bc34ec9e","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"fee23dd3-dabe-4e15-b2d3-ded1d93245aa","type":"HBar"},"selection_glyph":null,"view":{"id":"48435919-4522-4d5a-b919-d502a75293dc","type":"CDSView"}},"id":"5178f8c0-3f7f-4776-ab89-f786195a5577","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"837ff1c0-71aa-40cb-b97c-ec04932e4d62","subtype":"Figure","type":"Plot"},"ticker":{"id":"4a4d98e0-813a-40e1-820b-df13ad599ca9","type":"BasicTicker"}},"id":"eb0d5bdd-df53-4301-b937-7f74d8944ec7","type":"Grid"},{"attributes":{"source":{"id":"8100bef7-71fb-4e57-9ab5-e5455d089d0a","type":"ColumnDataSource"}},"id":"5773f0da-30b4-4385-8fa0-8adf69ad2475","type":"CDSView"},{"attributes":{},"id":"3dedd4c1-5594-4856-a449-27df4634f40d","type":"WheelZoomTool"},{"attributes":{},"id":"c4cfbef8-94a0-4752-989c-d380235e1af5","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"fcef0eae-41e5-4dce-a808-734395c95dc0","type":"PanTool"},{"id":"3dedd4c1-5594-4856-a449-27df4634f40d","type":"WheelZoomTool"},{"id":"247062c3-c866-4580-a871-f96c0b0ea5af","type":"BoxZoomTool"},{"id":"df7a6c19-186a-4aa3-a275-176552d5f705","type":"SaveTool"},{"id":"610fd11e-a854-492d-96b4-e29792bb155a","type":"ResetTool"},{"id":"c4cfbef8-94a0-4752-989c-d380235e1af5","type":"HelpTool"}]},"id":"b0865e29-6762-4f77-b319-05906163e1da","type":"Toolbar"},{"attributes":{},"id":"646c3d4e-a4e1-43c7-8fb3-a4c341a6debe","type":"BasicTickFormatter"},{"attributes":{},"id":"fcef0eae-41e5-4dce-a808-734395c95dc0","type":"PanTool"},{"attributes":{"fields":["2015","2016"]},"id":"65fec1b7-d506-433e-9511-8f2bd6d2934c","type":"Stack"},{"attributes":{"source":{"id":"8100bef7-71fb-4e57-9ab5-e5455d089d0a","type":"ColumnDataSource"}},"id":"48435919-4522-4d5a-b919-d502a75293dc","type":"CDSView"},{"attributes":{"fill_color":{"value":"#e0f3db"},"height":{"value":0.9},"left":{"expr":{"id":"abcf5895-24ff-4342-ba96-82945cadb82c","type":"Stack"}},"line_color":{"value":"#e0f3db"},"right":{"expr":{"id":"1e0855dc-73d0-4ac8-9915-f566c2b6a984","type":"Stack"}},"y":{"field":"fruits"}},"id":"477fefbd-1833-4dc6-a80e-73cb83c2857b","type":"HBar"},{"attributes":{"source":{"id":"8100bef7-71fb-4e57-9ab5-e5455d089d0a","type":"ColumnDataSource"}},"id":"d7f83d45-88aa-40ca-a6ad-ba528a4720f2","type":"CDSView"}],"root_ids":["837ff1c0-71aa-40cb-b97c-ec04932e4d62"]},"title":"Bokeh Application","version":"0.12.11"}}';
                    var render_items = [{"docid":"2b3540b6-d89d-428c-9c29-8fbfb7c91d4b","elementid":"07a6104b-16d7-475d-bf78-2d716db90491","modelid":"837ff1c0-71aa-40cb-b97c-ec04932e4d62"}];
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
                        console.log("Bokeh: ERROR: Unable to embed document because BokehJS library is missing")
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.11.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.11.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.11.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.11.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.11.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.11.min.css");
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