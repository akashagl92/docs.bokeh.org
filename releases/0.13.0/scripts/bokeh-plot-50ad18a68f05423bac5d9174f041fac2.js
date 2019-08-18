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
      };var element = document.getElementById("3b084600-90a8-4b24-8051-9723bda20903");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '3b084600-90a8-4b24-8051-9723bda20903' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"c78469c5-eb30-4e2d-bd78-e5109a3d4494":{"roots":{"references":[{"attributes":{"fill_color":{"value":"#fee8c8"},"height":{"value":0.9},"left":{"expr":{"id":"61ddf2b8-c635-45fd-8954-ddea2b319794","type":"Stack"}},"line_color":{"value":"#fee8c8"},"right":{"expr":{"id":"7ceb1b08-a876-420b-9536-982eb06b1202","type":"Stack"}},"y":{"field":"fruits"}},"id":"46aeacfe-38cf-4c39-8845-3b0c301b8772","type":"HBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"61ddf2b8-c635-45fd-8954-ddea2b319794","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"7ceb1b08-a876-420b-9536-982eb06b1202","type":"Stack"}},"y":{"field":"fruits"}},"id":"6aa28b1f-bfb8-4b4b-9a20-b78f325fddde","type":"HBar"},{"attributes":{"label":{"value":"2016 imports"},"renderers":[{"id":"ba492809-fb14-4a8f-a490-2b2423ee1bdd","type":"GlyphRenderer"}]},"id":"13127bc2-3f62-482c-a58a-95693e7b0c05","type":"LegendItem"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"ed201d0d-a954-4749-ae57-99b91e394d86","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"bd78d3f2-b477-48a5-af49-8b018fc730f5","type":"Stack"}},"y":{"field":"fruits"}},"id":"fc370a93-8a94-450e-8f1a-fd7535c9f258","type":"HBar"},{"attributes":{},"id":"a6317bcf-08e1-466e-abe8-024fb7b25e76","type":"Selection"},{"attributes":{"source":{"id":"d36e8b03-e362-4b2d-8eb9-043475d4bd78","type":"ColumnDataSource"}},"id":"f867aab6-969d-4ae0-a386-460fd4f191ef","type":"CDSView"},{"attributes":{"data_source":{"id":"d36e8b03-e362-4b2d-8eb9-043475d4bd78","type":"ColumnDataSource"},"glyph":{"id":"c5522ff5-bc18-422c-850f-af23b56eaf07","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"name":"2016","nonselection_glyph":{"id":"fc370a93-8a94-450e-8f1a-fd7535c9f258","type":"HBar"},"selection_glyph":null,"view":{"id":"f867aab6-969d-4ae0-a386-460fd4f191ef","type":"CDSView"}},"id":"ba492809-fb14-4a8f-a490-2b2423ee1bdd","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#fdbb84"},"height":{"value":0.9},"left":{"expr":{"id":"ed201d0d-a954-4749-ae57-99b91e394d86","type":"Stack"}},"line_color":{"value":"#fdbb84"},"right":{"expr":{"id":"bd78d3f2-b477-48a5-af49-8b018fc730f5","type":"Stack"}},"y":{"field":"fruits"}},"id":"c5522ff5-bc18-422c-850f-af23b56eaf07","type":"HBar"},{"attributes":{},"id":"07d8a730-65fb-4177-9bcb-73850dc03b13","type":"UnionRenderers"},{"attributes":{},"id":"a03efda5-1c19-49ef-96dc-7d27c7c85fcd","type":"UnionRenderers"},{"attributes":{},"id":"5856a6ab-ec4e-4c1f-b056-1a011fb23699","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"d575eb4a-1812-471a-b669-fc42633bdc4a","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"8a83681a-7cad-4ece-866a-92dee1c28c6d","type":"Stack"}},"y":{"field":"fruits"}},"id":"fb638301-d15e-456b-9132-980397be7110","type":"HBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"5e062b20-d8af-4c73-9af5-1dd5342d75bb","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"b69c7f78-99eb-4e0a-aeb5-ec1ee64a623d","type":"Stack"}},"y":{"field":"fruits"}},"id":"c1c6a9b4-3c45-4f92-86df-c57165aeaf2e","type":"HBar"},{"attributes":{"callback":null,"data":{"2015":[-1,0,-1,-3,-2,-1],"2016":[-2,-1,-3,-1,-2,-2],"2017":[-1,-2,-1,0,-2,-2],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"a6317bcf-08e1-466e-abe8-024fb7b25e76","type":"Selection"},"selection_policy":{"id":"07d8a730-65fb-4177-9bcb-73850dc03b13","type":"UnionRenderers"}},"id":"d36e8b03-e362-4b2d-8eb9-043475d4bd78","type":"ColumnDataSource"},{"attributes":{"source":{"id":"830702b1-7301-4431-9b51-a42ec2622b1f","type":"ColumnDataSource"}},"id":"0d3195cc-2a18-4836-a47e-dd2c05a5f087","type":"CDSView"},{"attributes":{"label":{"value":"2017 imports"},"renderers":[{"id":"3dcbbd45-7d57-44c7-b4f0-4d3819e55545","type":"GlyphRenderer"}]},"id":"6097eda2-5317-4078-96c2-64edb8d46c07","type":"LegendItem"},{"attributes":{"label":{"value":"2016 exports"},"renderers":[{"id":"fa541f83-7901-47ec-aacc-9f3c025fc644","type":"GlyphRenderer"}]},"id":"e0a8383c-02cc-4772-95bc-bea35261d210","type":"LegendItem"},{"attributes":{"fields":[]},"id":"f7765056-14a4-42af-afca-733f82ac74fd","type":"Stack"},{"attributes":{"callback":null,"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"a2aa3342-7666-40b2-82a6-3272b303de9d","type":"Selection"},"selection_policy":{"id":"a03efda5-1c19-49ef-96dc-7d27c7c85fcd","type":"UnionRenderers"}},"id":"830702b1-7301-4431-9b51-a42ec2622b1f","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"b0e345c0-3e57-4b31-8cae-ddf87bab6836","type":"BoxAnnotation"},{"attributes":{},"id":"13134dc1-26d1-4501-98da-aeae99b8bc3d","type":"PanTool"},{"attributes":{"fields":["2015"]},"id":"5e062b20-d8af-4c73-9af5-1dd5342d75bb","type":"Stack"},{"attributes":{},"id":"538916da-4105-4063-9ad4-76b7ed807efb","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"b0e345c0-3e57-4b31-8cae-ddf87bab6836","type":"BoxAnnotation"}},"id":"161a68ac-9518-410d-92ee-93e8217b9e44","type":"BoxZoomTool"},{"attributes":{},"id":"e2d8b6d4-84f3-4d8b-acd4-95d2673d3bf8","type":"SaveTool"},{"attributes":{},"id":"50f84425-50fd-4087-b024-109313fb8db9","type":"ResetTool"},{"attributes":{"fields":["2015","2016"]},"id":"61ddf2b8-c635-45fd-8954-ddea2b319794","type":"Stack"},{"attributes":{},"id":"ae5425fe-a486-4527-9bc6-8f60850b7e4d","type":"HelpTool"},{"attributes":{"label":{"value":"2015 exports"},"renderers":[{"id":"49eb603b-5b7d-4ab1-966c-8be95dfa6d29","type":"GlyphRenderer"}]},"id":"d29f97db-dcb7-4b8d-acc3-e9a9608152c1","type":"LegendItem"},{"attributes":{"fields":["2015","2016","2017"]},"id":"8a83681a-7cad-4ece-866a-92dee1c28c6d","type":"Stack"},{"attributes":{"fields":["2015","2016"]},"id":"b69c7f78-99eb-4e0a-aeb5-ec1ee64a623d","type":"Stack"},{"attributes":{"fields":["2015","2016"]},"id":"d575eb4a-1812-471a-b669-fc42633bdc4a","type":"Stack"},{"attributes":{"fill_color":{"value":"#e0f3db"},"height":{"value":0.9},"left":{"expr":{"id":"d575eb4a-1812-471a-b669-fc42633bdc4a","type":"Stack"}},"line_color":{"value":"#e0f3db"},"right":{"expr":{"id":"8a83681a-7cad-4ece-866a-92dee1c28c6d","type":"Stack"}},"y":{"field":"fruits"}},"id":"e43644d3-84f2-4fa7-8436-6b27495789ab","type":"HBar"},{"attributes":{"fields":["2015"]},"id":"d23c2d9c-b52a-4f13-87ae-1bfc7eb7442b","type":"Stack"},{"attributes":{},"id":"51fa5b24-2756-4bcb-9f82-32749d984fcc","type":"CategoricalTicker"},{"attributes":{"fill_color":{"value":"#43a2ca"},"height":{"value":0.9},"left":{"expr":{"id":"093cb4c7-8ace-41e8-bd3c-8997fbe74858","type":"Stack"}},"line_color":{"value":"#43a2ca"},"right":{"expr":{"id":"02314952-b7ed-41ba-ac42-6218e927bdd6","type":"Stack"}},"y":{"field":"fruits"}},"id":"c52fee3c-1dcc-41e4-b1df-022ee6c21b94","type":"HBar"},{"attributes":{"source":{"id":"d36e8b03-e362-4b2d-8eb9-043475d4bd78","type":"ColumnDataSource"}},"id":"7e192923-d64d-4e4a-ac05-becf16e09585","type":"CDSView"},{"attributes":{"label":{"value":"2017 exports"},"renderers":[{"id":"b8553acd-b90d-4a54-a0d6-138a71d30b18","type":"GlyphRenderer"}]},"id":"63ee0553-723b-4349-b338-336f76c6e038","type":"LegendItem"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"093cb4c7-8ace-41e8-bd3c-8997fbe74858","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"02314952-b7ed-41ba-ac42-6218e927bdd6","type":"Stack"}},"y":{"field":"fruits"}},"id":"5b5c6e50-eb68-4662-8c46-e4239036ebe3","type":"HBar"},{"attributes":{"source":{"id":"830702b1-7301-4431-9b51-a42ec2622b1f","type":"ColumnDataSource"}},"id":"fe92676d-3503-4108-9e2f-67116f74be0f","type":"CDSView"},{"attributes":{"data_source":{"id":"830702b1-7301-4431-9b51-a42ec2622b1f","type":"ColumnDataSource"},"glyph":{"id":"c52fee3c-1dcc-41e4-b1df-022ee6c21b94","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"name":"2015","nonselection_glyph":{"id":"5b5c6e50-eb68-4662-8c46-e4239036ebe3","type":"HBar"},"selection_glyph":null,"view":{"id":"5786e27e-7d6a-42f4-88ac-891b6baac8d8","type":"CDSView"}},"id":"49eb603b-5b7d-4ab1-966c-8be95dfa6d29","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#a8ddb5"},"height":{"value":0.9},"left":{"expr":{"id":"5e062b20-d8af-4c73-9af5-1dd5342d75bb","type":"Stack"}},"line_color":{"value":"#a8ddb5"},"right":{"expr":{"id":"b69c7f78-99eb-4e0a-aeb5-ec1ee64a623d","type":"Stack"}},"y":{"field":"fruits"}},"id":"570f7b9d-b349-4bcd-a420-3cd1163989d9","type":"HBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"f7765056-14a4-42af-afca-733f82ac74fd","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"d23c2d9c-b52a-4f13-87ae-1bfc7eb7442b","type":"Stack"}},"y":{"field":"fruits"}},"id":"aec3e142-c257-469c-b68f-b56f90d9a7e2","type":"HBar"},{"attributes":{"label":{"value":"2015 imports"},"renderers":[{"id":"1501f5fa-caaf-4fcc-bd14-01658d06055b","type":"GlyphRenderer"}]},"id":"10157b9b-1ac7-472b-acef-7b13f0eea939","type":"LegendItem"},{"attributes":{"fields":["2015"]},"id":"02314952-b7ed-41ba-ac42-6218e927bdd6","type":"Stack"},{"attributes":{"fields":["2015","2016","2017"]},"id":"7ceb1b08-a876-420b-9536-982eb06b1202","type":"Stack"},{"attributes":{"below":[{"id":"107e3152-c7cf-4ae9-ae9b-0a59819a9c01","type":"LinearAxis"}],"left":[{"id":"27746a12-e1ae-4c1a-ad80-a62e2d503f28","type":"CategoricalAxis"}],"outline_line_color":{"value":null},"plot_height":250,"renderers":[{"id":"107e3152-c7cf-4ae9-ae9b-0a59819a9c01","type":"LinearAxis"},{"id":"fa33bdfe-6aca-4554-b017-aa4644c1724f","type":"Grid"},{"id":"27746a12-e1ae-4c1a-ad80-a62e2d503f28","type":"CategoricalAxis"},{"id":"911084dc-768a-498a-b94c-333322cef92f","type":"Grid"},{"id":"b0e345c0-3e57-4b31-8cae-ddf87bab6836","type":"BoxAnnotation"},{"id":"2f00d1e2-af5e-45e4-812b-c210c78efff0","type":"Legend"},{"id":"49eb603b-5b7d-4ab1-966c-8be95dfa6d29","type":"GlyphRenderer"},{"id":"fa541f83-7901-47ec-aacc-9f3c025fc644","type":"GlyphRenderer"},{"id":"b8553acd-b90d-4a54-a0d6-138a71d30b18","type":"GlyphRenderer"},{"id":"1501f5fa-caaf-4fcc-bd14-01658d06055b","type":"GlyphRenderer"},{"id":"ba492809-fb14-4a8f-a490-2b2423ee1bdd","type":"GlyphRenderer"},{"id":"3dcbbd45-7d57-44c7-b4f0-4d3819e55545","type":"GlyphRenderer"}],"title":{"id":"f1316f11-a994-4692-92fd-f070cc745a3f","type":"Title"},"toolbar":{"id":"56eded3a-444c-4103-bc33-a3b83df3eabc","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"2692606b-0d03-442c-8f72-74a792865ee2","type":"Range1d"},"x_scale":{"id":"60de6b06-e0c7-4a7f-b2cb-ea1ce2724496","type":"LinearScale"},"y_range":{"id":"8b2be905-1009-4acc-844c-e8501e99657d","type":"FactorRange"},"y_scale":{"id":"44be6589-d363-44cc-ad59-97593b9fdbf8","type":"CategoricalScale"}},"id":"21b33618-69ad-4e29-a402-92a9fb0d3861","subtype":"Figure","type":"Plot"},{"attributes":{"items":[{"id":"d29f97db-dcb7-4b8d-acc3-e9a9608152c1","type":"LegendItem"},{"id":"e0a8383c-02cc-4772-95bc-bea35261d210","type":"LegendItem"},{"id":"63ee0553-723b-4349-b338-336f76c6e038","type":"LegendItem"},{"id":"10157b9b-1ac7-472b-acef-7b13f0eea939","type":"LegendItem"},{"id":"13127bc2-3f62-482c-a58a-95693e7b0c05","type":"LegendItem"},{"id":"6097eda2-5317-4078-96c2-64edb8d46c07","type":"LegendItem"}],"location":"top_left","plot":{"id":"21b33618-69ad-4e29-a402-92a9fb0d3861","subtype":"Figure","type":"Plot"}},"id":"2f00d1e2-af5e-45e4-812b-c210c78efff0","type":"Legend"},{"attributes":{"fill_color":{"value":"#e34a33"},"height":{"value":0.9},"left":{"expr":{"id":"f7765056-14a4-42af-afca-733f82ac74fd","type":"Stack"}},"line_color":{"value":"#e34a33"},"right":{"expr":{"id":"d23c2d9c-b52a-4f13-87ae-1bfc7eb7442b","type":"Stack"}},"y":{"field":"fruits"}},"id":"096261be-c0e4-4176-85f5-ba396f189eda","type":"HBar"},{"attributes":{"plot":null,"text":"Fruit import/export, by year"},"id":"f1316f11-a994-4692-92fd-f070cc745a3f","type":"Title"},{"attributes":{"data_source":{"id":"d36e8b03-e362-4b2d-8eb9-043475d4bd78","type":"ColumnDataSource"},"glyph":{"id":"096261be-c0e4-4176-85f5-ba396f189eda","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"name":"2015","nonselection_glyph":{"id":"aec3e142-c257-469c-b68f-b56f90d9a7e2","type":"HBar"},"selection_glyph":null,"view":{"id":"7e192923-d64d-4e4a-ac05-becf16e09585","type":"CDSView"}},"id":"1501f5fa-caaf-4fcc-bd14-01658d06055b","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":16,"start":-16},"id":"2692606b-0d03-442c-8f72-74a792865ee2","type":"Range1d"},{"attributes":{},"id":"a2aa3342-7666-40b2-82a6-3272b303de9d","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"13134dc1-26d1-4501-98da-aeae99b8bc3d","type":"PanTool"},{"id":"538916da-4105-4063-9ad4-76b7ed807efb","type":"WheelZoomTool"},{"id":"161a68ac-9518-410d-92ee-93e8217b9e44","type":"BoxZoomTool"},{"id":"e2d8b6d4-84f3-4d8b-acd4-95d2673d3bf8","type":"SaveTool"},{"id":"50f84425-50fd-4087-b024-109313fb8db9","type":"ResetTool"},{"id":"ae5425fe-a486-4527-9bc6-8f60850b7e4d","type":"HelpTool"}]},"id":"56eded3a-444c-4103-bc33-a3b83df3eabc","type":"Toolbar"},{"attributes":{"source":{"id":"830702b1-7301-4431-9b51-a42ec2622b1f","type":"ColumnDataSource"}},"id":"5786e27e-7d6a-42f4-88ac-891b6baac8d8","type":"CDSView"},{"attributes":{},"id":"60de6b06-e0c7-4a7f-b2cb-ea1ce2724496","type":"LinearScale"},{"attributes":{"data_source":{"id":"830702b1-7301-4431-9b51-a42ec2622b1f","type":"ColumnDataSource"},"glyph":{"id":"570f7b9d-b349-4bcd-a420-3cd1163989d9","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"name":"2016","nonselection_glyph":{"id":"c1c6a9b4-3c45-4f92-86df-c57165aeaf2e","type":"HBar"},"selection_glyph":null,"view":{"id":"0d3195cc-2a18-4836-a47e-dd2c05a5f087","type":"CDSView"}},"id":"fa541f83-7901-47ec-aacc-9f3c025fc644","type":"GlyphRenderer"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"range_padding":0.1},"id":"8b2be905-1009-4acc-844c-e8501e99657d","type":"FactorRange"},{"attributes":{},"id":"44be6589-d363-44cc-ad59-97593b9fdbf8","type":"CategoricalScale"},{"attributes":{},"id":"d7dec8bf-edab-4494-b8ae-e7497d2ea92c","type":"CategoricalTickFormatter"},{"attributes":{"fields":["2015","2016"]},"id":"bd78d3f2-b477-48a5-af49-8b018fc730f5","type":"Stack"},{"attributes":{"plot":{"id":"21b33618-69ad-4e29-a402-92a9fb0d3861","subtype":"Figure","type":"Plot"},"ticker":{"id":"4841eb44-f424-4ecb-bb0e-04f440107f2d","type":"BasicTicker"}},"id":"fa33bdfe-6aca-4554-b017-aa4644c1724f","type":"Grid"},{"attributes":{"data_source":{"id":"830702b1-7301-4431-9b51-a42ec2622b1f","type":"ColumnDataSource"},"glyph":{"id":"e43644d3-84f2-4fa7-8436-6b27495789ab","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"name":"2017","nonselection_glyph":{"id":"fb638301-d15e-456b-9132-980397be7110","type":"HBar"},"selection_glyph":null,"view":{"id":"fe92676d-3503-4108-9e2f-67116f74be0f","type":"CDSView"}},"id":"b8553acd-b90d-4a54-a0d6-138a71d30b18","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"5856a6ab-ec4e-4c1f-b056-1a011fb23699","type":"BasicTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"21b33618-69ad-4e29-a402-92a9fb0d3861","subtype":"Figure","type":"Plot"},"ticker":{"id":"4841eb44-f424-4ecb-bb0e-04f440107f2d","type":"BasicTicker"}},"id":"107e3152-c7cf-4ae9-ae9b-0a59819a9c01","type":"LinearAxis"},{"attributes":{"data_source":{"id":"d36e8b03-e362-4b2d-8eb9-043475d4bd78","type":"ColumnDataSource"},"glyph":{"id":"46aeacfe-38cf-4c39-8845-3b0c301b8772","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"name":"2017","nonselection_glyph":{"id":"6aa28b1f-bfb8-4b4b-9a20-b78f325fddde","type":"HBar"},"selection_glyph":null,"view":{"id":"39804e14-ea03-4762-8fae-e98f09ecbd9e","type":"CDSView"}},"id":"3dcbbd45-7d57-44c7-b4f0-4d3819e55545","type":"GlyphRenderer"},{"attributes":{},"id":"4841eb44-f424-4ecb-bb0e-04f440107f2d","type":"BasicTicker"},{"attributes":{"formatter":{"id":"d7dec8bf-edab-4494-b8ae-e7497d2ea92c","type":"CategoricalTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"21b33618-69ad-4e29-a402-92a9fb0d3861","subtype":"Figure","type":"Plot"},"ticker":{"id":"51fa5b24-2756-4bcb-9f82-32749d984fcc","type":"CategoricalTicker"}},"id":"27746a12-e1ae-4c1a-ad80-a62e2d503f28","type":"CategoricalAxis"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"21b33618-69ad-4e29-a402-92a9fb0d3861","subtype":"Figure","type":"Plot"},"ticker":{"id":"51fa5b24-2756-4bcb-9f82-32749d984fcc","type":"CategoricalTicker"}},"id":"911084dc-768a-498a-b94c-333322cef92f","type":"Grid"},{"attributes":{"fields":["2015"]},"id":"ed201d0d-a954-4749-ae57-99b91e394d86","type":"Stack"},{"attributes":{"source":{"id":"d36e8b03-e362-4b2d-8eb9-043475d4bd78","type":"ColumnDataSource"}},"id":"39804e14-ea03-4762-8fae-e98f09ecbd9e","type":"CDSView"},{"attributes":{"fields":[]},"id":"093cb4c7-8ace-41e8-bd3c-8997fbe74858","type":"Stack"}],"root_ids":["21b33618-69ad-4e29-a402-92a9fb0d3861"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"c78469c5-eb30-4e2d-bd78-e5109a3d4494","roots":{"21b33618-69ad-4e29-a402-92a9fb0d3861":"3b084600-90a8-4b24-8051-9723bda20903"}}];
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